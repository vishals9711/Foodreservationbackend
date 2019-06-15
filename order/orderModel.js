"user strict";
var sql = require("../db.js");

//Registration object constructor
var Order = function(Order) {
  this.order = order.order;
  this.created_at = new Date();
};

Order.createOrder = function createOrder(data, result) {
  sql.query(
    "INSERT into order_table (cid, bill) VALUES (?,?)",
    [data[1].userid, data[2].total],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        let result1 = { id: res.insertId };

        for (let eachItem of data) {
          if (eachItem.ItemID != null) {
            sql.query(
              "INSERT into order_details (oid,itemID,qty,price) VALUES (?,?,?,?)",
              [res.insertId, eachItem.ItemID, eachItem.qty, eachItem.price],
              function(err, res) {
                if (!err) {
                  console.log("Inserted Item Id:" + eachItem.ItemID);
                }
              }
            );
          }
        }
        sql.query(
          "INSERT into takes_order (RId,OId) VALUES (?,?)",
          [data[0].r_id, res.insertId],
          function(err, res1) {
            if (!err) {
              let result1 = { id: res.insertId };
              result(null, result1);
            }
          }
        );
      }
    }
  );
};

module.exports = Order;
