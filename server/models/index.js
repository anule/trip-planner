const db = require('./db.js');
const Sequelize = require('sequelize');

const Place = db.define('place', {
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  phone: Sequelize.STRING,
  location: Sequelize.ARRAY(Sequelize.INTEGER)
});

const Hotel = db.define('hotel', {
  name: Sequelize.STRING,
  num_stars: Sequelize.FLOAT(1, 5),
  amenities: Sequelize.TEXT
});

const Activity = db.define('activity', {
  name: Sequelize.STRING,
  age_range: Sequelize.STRING
});

const Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  cuisine: Sequelize.TEXT,
  price: {
    type: Sequelize.INTEGER,
    validate: {min: 1, max: 5}
  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db: db,
  Place: Place,
  Hotel: Hotel,
  Restaurant: Restaurant,
  Activity: Activity
};
