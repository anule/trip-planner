const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYXByaWxydWViIiwiYSI6ImNqOGJxODJ2ZjAwbXAzMmxiZ3hzbGpnenUifQ.dX1aCpcXMwLIS73y3bvZvg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', [-74.009, 40.705]);
marker.addTo(map);

var name = data.hotels[i].name + 'location';

fetch('/api/attractions')
  .then(res => res.json())
  .then(data => {
    //Hotel options
    for (let i = 0; i < data.hotels.length; i++) {
      let option = document.createElement('option');
      option.textContent = data.hotels[i].name;
      option.id = data.hotels[i].id;
      option.class = 'hotels'
      document.getElementById('hotels-choices').appendChild(option);
    }
    //Restaurant options
    for (let i = 0; i < data.restaurants.length; i++) {
      let option = document.createElement('option');
      option.textContent = data.restaurants[i].name;
      option.id = data.restaurants[i].id;
      document.getElementById('restaurants-choices').appendChild(option);
    }
    //Activity options
    for (let i = 0; i < data.activities.length; i++) {
      let option = document.createElement('option');
      option.textContent = data.activities[i].name;
      option.id = data.activities[i].id;
      document.getElementById('activities-choices').appendChild(option);
    }
  })
  .catch(console.error);


// selectHotel.addEventListener('click', function() {
//   console.log('hello');
// });

// hotelOption.addEventListener('click', function(){
//   console.log(hotelOption);
// });

const hotelButton = document.getElementById('hotels-add');
hotelButton.addEventListener('click', function() {
  const select = document.getElementById('hotels-choices');
  let selectedId = select.value;
  // console.log(select.value);
  let listItem = document.createElement('li');
  listItem.innerHTML = select.value;
  document.getElementById('hotels-list').appendChild(listItem);
  let hotelMarker = buildMarker('hotels', );
});

const restaurantButton = document.getElementById('restaurants-add');
restaurantButton.addEventListener('click', function() {
  const select = document.getElementById('restaurants-choices');
  let selectedId = select.value;
  // console.log(select.value);
  let listItem = document.createElement('li');
  listItem.innerHTML = select.value;
  document.getElementById('restaurants-list').appendChild(listItem);
  let restaurantMarker = buildMarker('restaurants', );
});

const activitiesButton = document.getElementById('activities-add');
activitiesButton.addEventListener('click', function() {
  const select = document.getElementById('activities-choices');
  let selectedId = select.value;
  // console.log(select.value);
  let listItem = document.createElement('li');
  listItem.innerHTML = select.value;
  document.getElementById('activities-list').appendChild(listItem);
  let activitiesMarker = buildMarker('activities', );
});
