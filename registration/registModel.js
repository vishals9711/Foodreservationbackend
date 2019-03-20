'user strict';
var sql = require('../db.js');

//Registration object constructor
var Registration = function (registration) {
    this.registration = registration.registration;
    this.created_at = new Date();
};


Registration.createRegistration = function createRegistration(data, result) {
    console.log(data)

<<<<<<< HEAD
    sql.query("INSERT into customer (CName, CEmail, CPhone, CDoB, CPassword) VALUES (?,?,?,?,?)", [data.name, data.email, data.phone, data.dob, data.password], function (err, res) {
=======
    sql.query("INSERT into customer (CName, CEmail, CPhone, CDoB,CPassword) VALUES (?,?,?,?,?)", [data.name, data.email, data.phone, data.dob,data.password], function (err, res) {
>>>>>>> e7320b998c221443617932210ab33766207d3c90
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            
                    let result1 = { "id": res.insertId, "name": data.name, "email": data.email }
                    result(null, result1);
                }

            });
        
    
};

module.exports = Registration;