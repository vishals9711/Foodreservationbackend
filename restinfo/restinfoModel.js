'user strict';
var sql = require('../db.js');

//Customer object constructor
var Restaurant = function (restaurant) {
    this.restaurant = restaurant.restaurant;
    this.status = restaurant.status;
    this.created_at = new Date();
};


Restaurant.getAllRestaurants = function getAllRestaurants(result) {
    sql.query("Select * from rest_info", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('restaurant : ', res);

            result(null, res);
        }
    });
};

module.exports = Restaurant;