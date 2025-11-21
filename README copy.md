# IP Address Tracker 🌍

An application that allows users to look up IP addresses and view their corresponding location, timezone, ISP information, and position on an interactive map.

## Features 🔥
- Lookup by IP
- Displays IP, city/country, timezone and ISP
- Shows marker on a Leaflet map and recenters map
- Input validation and a dynamic IP input hint/mask

## Screenshots 📸

### Desktop View
![Desktop View](./assets/design/desktop-design.jpg)

### Mobile View
![Mobile View](./assets/design/mobileView.png)

## Tech stack 🛠️
- ⚙️ Vanilla JavaScript (ES modules)
- 🗺️ Leaflet + OpenStreetMap tiles 
- 📦 Parcel (dev server / bundler) 
- 🎨 SCSS → CSS 

## Quick start 🚀

1. Clone or copy the project folder to your machine.

2. Install dependencies:
```
npm install
```

3. Start development server:
```
npx parcel index.html
```
or
```
npm run dev
```

4. Build for production:
```
npx parcel build index.html --dist-dir build
```
or
```
npm run build
```

## License & credits 🤝
- Based on a Frontend Mentor challenge (https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Use and adapt the code freely for personal or educational projects.