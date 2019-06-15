"user strict";
var sql = require("../db.js");
var Buffer = require("buffer").Buffer;

//Customer object constructor
var Restaurant = function(restaurant) {
  this.restaurant = restaurant.restaurant;
  this.status = restaurant.status;
  this.created_at = new Date();
};

Restaurant.getAllRestaurants = function getAllRestaurants(result) {
  sql.query("Select * from rest_info", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      //console.log('restaurant : ', res);
      //to remove later
      //console.log("---------------------------------------------------------");
      //console.log(res[0].RImg);
      for (var i = 0; i < res.length; i++) {
        var bufferBase64 = Buffer.from(res[i].RImg, "binary").toString(
          "base64"
        );
        res[i].RImg = bufferBase64;
        //console.log(bufferBase64);
      }

      //console.log('getallreataurants model out-start',res,'getallrestaurants model out-end');
      result(null, res);
    }
  });
};

Restaurant.getRestaurant = function getRestaurant(passed_id, result) {
  sql.query("Select * from rest_info where RId=?", passed_id, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      for (var i = 0; i < res.length; i++) {
        var bufferBase64 = Buffer.from(res[i].RImg, "binary").toString(
          "base64"
        );
        res[i].RImg = bufferBase64;
        //console.log(bufferBase64);
      }

      //console.log('getreataurant model out-start',res,'getrestaurant model out-end');
      result(null, res);
    }
  });
};

Restaurant.editRestaurantInfo = function editRestaurantInfo(
  restUpdateInfo,
  result
) {
  console.log("inside editRestaurantInfo in restInfoModel", restUpdateInfo);
  sql.query(
    "Update rest_info set RName=?, RAddress=?, RCuisine=? where RId=?",
    [
      restUpdateInfo.newName,
      restUpdateInfo.newAddress,
      restUpdateInfo.newCuisine,
      restUpdateInfo.rId
    ],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("restinfoModel - Restaurant.editRestaurantInfo", res);
        result(null, res);
      }
    }
  );
};

Restaurant.removeRestaurant = function removeRestaurant(restData, result) {
  console.log("inside removeRestaurant in restInfoModel", restData.rId);
  sql.query("Delete from rest_info where RId=?", [restData.rId], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("restinfoModel - Restaurant.removeRestaurant", res);
      result(null, res);
    }
  });
};

Restaurant.getTable = function getTable(passed_id, result) {
  sql.query(
    "Select TId,name from r_table where RId=? AND book=0",
    passed_id,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Restaurant;
