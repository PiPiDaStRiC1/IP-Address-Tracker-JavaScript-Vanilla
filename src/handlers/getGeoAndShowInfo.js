import { elements } from "../dom";
import {addErrorModal} from "../handlers"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

let map;    
let marker; 
let previousIp;

export async function getGeo(ipAddress) {
    if (ipAddress === previousIp) return;
    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_OkQ1C8UQJIZ1P6QiUPkZZUkWPUzeS&ipAddress=${ipAddress}`);
        const data = await response.json();
        const {ip, location, _, isp} = data;
        elements.ipField.innerText = ip;
        elements.locationField.innerText = `${location.city || "none"}, ${location.country || "none"}`;
        elements.timezoneField.innerText = `UTC ${location.timezone || "none"}`;
        elements.ispField.innerText = isp || "-";
        previousIp = ipAddress;
        showOnMap(location.lat, location.lng, isp, ip);
    } catch (error) {
        addErrorModal('Failed to fetch geo data');
    }
}

export function showOnMap(lat, lng, isp, ip) {
    if (!map) {
        map = L.map('map' , {zoomControl: false}).setView([lat, lng], 16);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minNativeZoom: 3,
            maxZoom: 19,
            attribution: 'Coded by <a href="https://github.com/PiPiDaStRiC1">Artem</a>'
        }).addTo(map);
        L.control.zoom({
            position: 'bottomright'
        }).addTo(map);
    } else {
        map.setView([lat, lng], map.getZoom());
    }

    if (marker) {
        marker.setLatLng([lat, lng], {icon: addOwnMarker()})
            .bindPopup(`${isp || ip}`)
            .openPopup();
    } else {
        marker = L.marker([lat, lng], {icon: addOwnMarker()})
            .addTo(map) 
            .bindPopup(`${isp || ip}`)
            .openPopup();
    }
}

export function addOwnMarker() {
    const iconUrl = new URL('../../assets/images/icon-location.svg', import.meta.url).href;

    const myIcon = L.icon({
        iconUrl,
        iconSize: [38, 50],       
        iconAnchor: [19, 38],     
        popupAnchor: [0, -38],    
    });
    return myIcon;
}
