import { elements } from "../dom";
import { TEMPLATE } from "../utils";

let lastTEMPLATE = " 55.255.255.255";

export function validateIp(userIp) {
    const IP = RegExp(/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/g);
    return IP.test(userIp);
}

export function userIpTip() {
    const allowChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const existingTip = document.querySelector('.header__tip');
    let allMatch = true;
    const inputValue = elements.userInput.value.split('');

    inputValue.forEach(char => {
        if (!allowChars.includes(char) && char !== '.') {
            allMatch = false;
        }
    });

    if (elements.userInput.value.length === 1) {
        lastTEMPLATE = " 55.255.255.255";
    } 

    if (elements.userInput.value === "8.8.8.") {
        lastTEMPLATE = ' '.repeat(5) + ".255";
    }

    if (elements.userInput.value !== "" && allMatch) {
        if (existingTip) {
            const parts = elements.userInput.value.split('.');
            const lastDotInd = elements.userInput.value.lastIndexOf('.');
            for (let i = 0; i < parts.length; i++) {
            
                if (Number(parts[i]) > 255) {
                    elements.userInput.value = elements.userInput.value.slice(0, lastDotInd + 1) + '255';
                    return;
                }

            }

            const dots = parts.length - 1;

            if (parts.length > 4) {
                elements.userInput.value = elements.userInput.value.slice(0, -1);
                return;
            }

            const cut = dots * 4 + parts[parts.length - 1].length;

            const spaces = " ".repeat(elements.userInput.value.length);
            existingTip.innerText = spaces + TEMPLATE.slice(cut);

            lastTEMPLATE = existingTip.innerText;
            return;
        }
        const tip = createIpTip();
        tip.innerText = lastTEMPLATE;
        elements.headerSearch.append(tip);
    } else {
        if (!existingTip) return;
        existingTip.remove();
    }
}

export function createIpTip() {
    const tip = document.createElement('pre');
    tip.classList.add('header__tip');
    tip.innerHTML = TEMPLATE;
    return tip;
}