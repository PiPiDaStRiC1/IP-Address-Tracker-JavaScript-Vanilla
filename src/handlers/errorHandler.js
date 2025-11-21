import { elements } from "../dom";


function addModalElements() {
    elements.modal = document.querySelector('.modal');
    elements.modalCross = document.querySelector('.modal__cross');
    elements.modalText = document.querySelector('.modal__text');
    elements.modalBackground = document.querySelector('.background');
}

export function addErrorModal(text) {
    createModal();
    addModalElements();
    elements.modalText.textContent = text;
    elements.modalBackground.addEventListener('click', closeModal);
    showModal();
}

export function showModal() {
    elements.modalBackground.classList.add('background--dark');
    elements.modal.classList.remove('closeModal');
    elements.modal.classList.add('showModal');
}

export function closeModal(event) {
    if (event.target !== elements.modalBackground && 
        event.target !== elements.modalCross
    ) return;

    elements.modalBackground.classList.remove('background--dark');
    elements.modal.classList.remove('showModal');
    elements.modal.classList.add('closeModal');
    elements.modalBackground.removeEventListener('click', closeModal);
    elements.modalBackground.remove();
    clearInput();
} 

export function clearInput() {
    const userInput = elements.userInput;
    userInput.value = '';
    userInput.setSelectionRange(0, 0);
    userInput.focus();
}

export function createModal() {
    const body = document.querySelector('body');
    const newModalBackground = document.createElement('div');
    newModalBackground.classList.add('background');
    newModalBackground.innerHTML = `
        <div class="modal">
            <h2 class="modal__title">Something go wrong...</h2>
            <p class="modal__text"></p>
            <span class="modal__cross">&times</span>
        </div>
    `;
    body.appendChild(newModalBackground);
}