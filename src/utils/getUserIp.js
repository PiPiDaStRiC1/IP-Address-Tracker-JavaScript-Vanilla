import { getGeo, validateIp, addErrorModal } from "../handlers";


export function getUserIp(userIp) {
    if (validateIp(userIp)) {
        getGeo(userIp); 
    } else {
        addErrorModal('Empty or invalid IP address');
    }
}