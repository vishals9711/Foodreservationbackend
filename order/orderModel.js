'user strict';
var sql = require('../db.js');

//Registration object constructor
var Order = function (Order) {
    this.order = order.order;
    this.created_at = new Date();
};


Order.createOrder = function createOrder(data, result) {
    console.log(data)

    sql.query("INSERT into order_chosen (OId, qty, price, ItemID) VALUES (?,?,?,?)", ['1', data.qty, data.price, data.ItemID], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        // else {
            
        //             let result1 = { "id": res.insertId, "name": data.name, "email": data.email }
        //             result(null, result1);
        //         }

            });
        
    
};

module.exports = Order;