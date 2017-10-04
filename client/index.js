const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoiYXByaWxydWViIiwiYSI6ImNqOGJxODJ2ZjAwbXAzMmxiZ3hzbGpnenUifQ.dX1aCpcXMwLIS73y3bvZvg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009, 40.705]);
marker.addTo(map);

fetch('/api/attractions')
  .then(res => res.json())
  .then(data => {
    //Hotel options
    for (let i = 0; i < data.hotels.length; i++) {
      let option = document.createElement('option');
      option.textContent = data.hotels[i].name;
      document.getElementById("hotels-choices").appendChild(option);
    }
    //Restaurant options
    for (let i = 0; i < data.restaurants.length; i++) {
      let option = document.createElement('option');
      option.textContent = data.restaurants[i].name;
      document.getElementById("restaurants-choices").appendChild(option);
    }
    //Activity options
    for (let i = 0; i < data.activities.length; i++) {
      let option = document.createElement('option');
      option.textContent = data.activities[i].name;
      document.getElementById("activities-choices").appendChild(option);
    }
  });
