import { submitIP, userIpTip } from "../handlers";
import { elements } from "./domElements";
import { showDefaultIP } from "../utils";

export function attachEvents() {
    elements.submitBtn.addEventListener('click', submitIP);
    elements.userInput.addEventListener('keydown', (event) => {
        if (event.key === "Enter") submitIP();
    });
    elements.userInput.addEventListener('input', userIpTip);
    document.addEventListener('DOMContentLoaded', showDefaultIP);
}