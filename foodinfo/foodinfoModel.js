'user strict';
var sql = require('../db.js');
var Buffer = require('buffer').Buffer;
//Customer object constructor
var Food = function (food) {
    this.food = food.food;
};

var i = 0;

Food.getFood = function getFood(passed_id,result) {
    sql.query("Select * from food_menu JOIN describes_fooddetails JOIN rest_info on food_menu.ItemID=describes_fooddetails.ItemID AND food_menu.RId=rest_info.RId where food_menu.RId=?",passed_id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            console.log('Foodinfo login model',res,'foodonfo login model end');
            console.log('---------------------------------------------------res[0]',res[0]);
            // for(var i=0;i<res.length;i++){
            //     var bufferBase64 = Buffer.from(res[i].Fimage, 'binary' ).toString('base64');
            //     res[i].Fimage=bufferBase64;
            //     //console.log(bufferBase64);
            // }

            for(i = 0;i<res.length;i++){
                if(res[i].Fimage!=null)
                {
                    var bufferBase64 = Buffer.from(res[i].Fimage, 'binary' ).toString('base64');
                    res[i].Fimage=bufferBase64;
                }
            }
            console.log('---------------------------------------------------res[0]',res[i]);
            
            //console.log('Foodinfo login model',res,'foodonfo login model end');
            result(null, res);
        }
    });
};

module.exports = Food;