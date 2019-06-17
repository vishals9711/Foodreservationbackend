"user strict";
var sql = require("../db.js");

//Booking object constructor
var Booking = function (booking) {
  this.booking = booking.booking;
};

Booking.createBooking_session = function createBooking_session(data, result) {
  sql.query(
    "INSERT into creates_session (CId) VALUES (?)",
    [data.CId],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        let result1 = { id: res.insertId };
        result(null, result1);
      }
    }
  );
};
Booking.create_session = function create_session(data, result) {
  sql.query(
    "INSERT into session (SId,TId) VALUES (?,?)",
    [data.SId, data.TId],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        sql.query(
          "UPDATE r_table set book =1 where TId=(?)",
          [data.TId],
          function (err1, res1) {
            if (err1) {
              console.log("error: ", err1);
              result(err1, null);
            } else {
              result(null, res1);
            }
          }
        );
      }
    }
  );
};

module.exports = Booking;
