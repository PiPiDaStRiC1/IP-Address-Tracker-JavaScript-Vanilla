import { attachEvents } from "./dom";
import { handleMediaChange } from "./handlers";

(function initApp() {
    handleMediaChange();
    attachEvents();
})();