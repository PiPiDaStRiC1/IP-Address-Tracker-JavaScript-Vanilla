import { elements } from "../dom";
import { getUserIp } from "../utils";

export function submitIP() {
    const userIp = elements.userInput.value;
    const tip = document.querySelector('.header__tip') ?? null;
    tip?.remove();
    getUserIp(userIp);
}