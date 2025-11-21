import { getUserIp } from "../utils";
import { elements } from "../dom";

export function showDefaultIP() {
    elements.userInput.value = '8.8.8.8';
    getUserIp('8.8.8.8');
}