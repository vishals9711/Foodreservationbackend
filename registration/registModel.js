'user strict';
var sql = require('../db.js');

//Registration object constructor
var Registration = function (registration) {
    this.registration = registration.registration;
    this.created_at = new Date();
};


Registration.createRegistration = function createRegistration(data, result) {
    console.log(data)

    sql.query("INSERT into customer (name, email, phone,dob) VALUES (?,?,?,?)", [data.name, data.email, data.phone, data.dob], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            sql.query("INSERT into login (cid,phone, email, password) VALUES (?,?,?,?)", [res.insertId, data.phone, data.email, data.password], function (err1, res1) {
                if (err1) {
                    console.log("error: ", err1);
                    result(err1, null);
                } else {
                    let result1 = { "id": res1.insertId, "name": data.name, "email": data.email }
                    result(null, result1);
                }

            });
        }
    });
};

module.exports = Registration;