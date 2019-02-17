'user strict';
var sql = require('../db.js');

//Registration object constructor
var Registration = function(registration){
    this.registration = registration.registration;
    this.created_at = new Date();
};


Registration.createRegistration = function createRegistration(data, result) { 
    console.log(data)
    
    sql.query("INSERT into customer (name, email, phone) VALUES (?,?,?)",[data.name,data.email,data.phone], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                sql.query("INSERT into login (cid,phone, email, password) VALUES (?,?,?,?)",[res.insertId,data.phone,data.email,"secret11"], function (err1, res1) {
                    if(err1) {
                        console.log("error: ", err1);
                        result(err1, null);
                    }else{
                        result(null, res1);
                    }

                }); 
            }
        });           
};

module.exports= Registration;