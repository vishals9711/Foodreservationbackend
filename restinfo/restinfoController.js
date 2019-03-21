'use strict';

var Restaurant = require('./restinfoModel.js');

exports.list_rest_info = function (req, res) {
  Restaurant.getAllRestaurants(function (err, restaurant) {

    console.log('controller')
    if (err)
      res.send(err);
    //console.log('res', restaurant);
    res.send(restaurant);
  });
};
exports.rest_info = function (req, res) {

  Restaurant.getRestaurant(req.params.passed_id,function (err, restaurant) {
    console.log('controller')
    if (err)
      res.send(err);
    
    res.send(restaurant);
  });
  };










