'user strict';
var sql = require('../db.js');

//Login object constructor
var Login = function(login){
    this.login = login.login;
};

Login.authenticateUser = function authenticateUser(auth, result) { 
    sql.query("Select * from login where email= ? AND password= ?",  [auth.email, auth.password], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res);
                result(null, res);
            }
        });           
};

module.exports= Login;