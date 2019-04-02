'user strict';
var sql = require('../db.js');

//Booking object constructor
var Booking = function (booking) {
    this.booking = booking.booking;
};



Booking.createBooking_session = function createBooking_session(data, result) {
    console.log(data)

    sql.query("INSERT into creates_session (CId) VALUES (?)", [data.CId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            let result1 = { "id": res.insertId }
            result(null, result1);
                    
                }

            });
        
    
};
Booking.create_session = function create_session(data, result) {
    console.log(data)

    sql.query("INSERT into session (SId,TId) VALUES (?,?)", [data.SId,data.TId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log("all okay")
            result(null, err);
                    
                }

            });
        
    
};

module.exports = Booking;