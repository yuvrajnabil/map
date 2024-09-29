// JavaScript code for the map (as discussed earlier)
var map = L.map('map').setView([23.6850, 90.3563], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var countryData = {
    "Bangladesh": {
        "coords": [23.6850, 90.3563],
        "deforestation": "11.2%",
        "water_solution": "85%",
        "gender_inequality": "0.536 (2020 GII)",
        "poverty": "20.5%"
    },
    "India": {
        "coords": [20.5937, 78.9629],
        "deforestation": "21.6%",
        "water_solution": "88%",
        "gender_inequality": "0.488 (2020 GII)",
        "poverty": "22%"
    },
    "Nepal": {
        "coords": [28.3949, 84.1240],
        "deforestation": "14.3%",
        "water_solution": "75%",
        "gender_inequality": "0.479 (2020 GII)",
        "poverty": "25.2%"
    }
};

function createPopupContent(country, data) {
    return `
        <h3>${country}</h3>
        <p><b>Deforestation:</b> ${data.deforestation}</p>
        <p><b>Water Solution:</b> ${data.water_solution}</p>
        <p><b>Gender Inequality Index (GII):</b> ${data.gender_inequality}</p>
        <p><b>Poverty Rate:</b> ${data.poverty}</p>
    `;
}

Object.keys(countryData).forEach(function(country) {
    var data = countryData[country];
    var invisibleMarker = L.marker(data.coords, {
        icon: L.divIcon({
            className: 'invisible-icon',
            html: ''
        })
    }).addTo(map);
    invisibleMarker.bindPopup(createPopupContent(country, data));
});

var bounds = L.latLngBounds([
    [23.6850, 90.3563],
    [20.5937, 78.9629],
    [28.3949, 84.1240]
]);

map.fitBounds(bounds);
