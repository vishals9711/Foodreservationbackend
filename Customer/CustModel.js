'user strict';
var sql = require('../db.js');

//Customer object constructor
var Customer = function (customer) {
    this.customer = customer.customer;
    this.status = customer.status;
    this.created_at = new Date();
};
Customer.createCustomer = function createUser(newCustomer, result) {
    sql.query("INSERT INTO customer set ?", newCustomer, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Customer.getCustomerById = function createUser(customerId, result) {
    sql.query("Select customer from customer where id = ? ", customerId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Customer.getAllCustomer = function getAllCustomer(result) {
    sql.query("Select * from customer", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('customer : ', res);

            result(null, res);
        }
    });
};
Customer.updateById = function (id, customer, result) {
    sql.query("UPDATE customer SET customer = ? WHERE id = ?", [customer.customer, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Customer.remove = function (id, result) {
    sql.query("DELETE FROM customer WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Customer;