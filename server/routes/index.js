const express = require('express');
const router = express.Router();
const Hotel = require('../models').Hotel;
const Restaurant = require('../models').Restaurant;
const Activity = require('../models').Activity;
const Place = require('../models').Place;
// const bodyParser = require('body-parser');

// router.use(bodyParser.json());

router.route('/attractions')
  .get(function(req, res, next) {
    // console.log(req.body);
    let allAttractions = {};

    Hotel.findAll({include: [{ all: true }] })
      .then((hotels) => {
        allAttractions.hotels = hotels;
        return Restaurant.findAll({include: [{ all: true }] });
      })
      .then((restaurants) => {
        allAttractions.restaurants = restaurants;
        return Activity.findAll({include: [{ all: true }] });
      })
      .then((activities) => {
        allAttractions.activities = activities;
      })
      .then(() => {
        res.json(allAttractions);
      })
      .catch(next);
  });



module.exports = router;
