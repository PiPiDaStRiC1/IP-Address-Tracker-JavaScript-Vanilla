import { elements } from "../dom";

const mediaTablet = window.matchMedia('(max-width: 768px)')
mediaTablet.addEventListener('change', () => {
    handleMediaChange();
});

function createHideBtn() {
    const btn = document.createElement('span');
    btn.classList.add('main__info_btn--hide');
    elements.hideBtn = btn;
    btn.addEventListener('click', hideText);
    elements.main.append(btn);
}

function removeHideBtn() {
    elements?.hideBtn?.remove();
}

function hideText() {
    elements.icon.classList.toggle('main__info_icon--show');
    elements.main.classList.toggle('main__info--hide');
    elements.infoElements.forEach(_ => {
        _.classList.toggle('main__info_text--hide');
    });
}

function showText() {
    elements?.icon?.classList?.remove('main__info_icon--show');
    elements.main.classList.remove('main__info--hide');
    elements.infoElements.forEach(_ => {
        _.classList.remove('main__info_text--hide');
    });
}

function createIcon() {
    const icon = document.createElement('div');
    icon.classList.add('main__info_icon');
    elements.icon = icon;
    elements.main.append(icon);
}

export function handleMediaChange() {
    if (mediaTablet.matches) { 
        createIcon();
        createHideBtn();
    } else {
        showText();
        removeHideBtn();
    }
}
