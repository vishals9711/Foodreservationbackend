const express = require('express');
const router = express.Router();


//--------------------------------  Login Routes ------------------------------------------
var loginController = require('../Login/LoginController');
router.route('/authenticateUser')
        .post(loginController.authenticateUser);

//--------------------------  customerList Routes --------------------------------------
var customerList = require('../Customer/CustController');
router.route('/customers')
        .get(customerList.list_all_customers)
router.route('/customers/:customerId')
        .get(customerList.read_a_customer)
        .put(customerList.update_a_customer)
        .delete(customerList.delete_a_customer);


//--------------------------  RegistrationList Routes --------------------------------------
var registrationList = require('../registration/registController');
router.route('/registration')
        .post(registrationList.create_a_registration);



module.exports = router;

