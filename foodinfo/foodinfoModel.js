'user strict';
var sql = require('../db.js');
const Buffer = require('buffer').Buffer;
//Customer object constructor
var Food = function (food) {
    this.food = food.food;
};


Food.getFood = function getFood(passed_id,result) {
    sql.query("Select * from food_menu JOIN describes_fooddetails on food_menu.ItemID=describes_fooddetails.ItemID where food_menu.RId=?",passed_id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            // for(var i=0;i<res.length;i++){
            //     var bufferBase64 = new Buffer( res[i].Fimage, 'binary' ).toString('base64');
            //     res[i].Fimage=bufferBase64;
            //     //console.log(bufferBase64);
            // }
            console.log("-------------Food part--------------------------")
            console.log(res[0].Fimage);
            
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = Food;