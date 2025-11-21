import {elements} from "../dom";

export function saveToLocalStorage() {
    const userIp = elements.userInput.value;
    localStorage.setItem('IP', userIp);
}
