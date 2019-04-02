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
        .get(customerList.read_a_customer)
        .put(customerList.update_a_customer)
        .delete(customerList.delete_a_customer);
router.route('/customers/:email')  
.get(customerList.read_a_customer_email)


//--------------------------  RegistrationList Routes --------------------------------------
var registrationList = require('../registration/registController');
router.route('/registration')
        .post(registrationList.create_a_registration);


//--------------------------  restaurant Routes --------------------------------------
var restInfo = require('../restinfo/restinfoController');
router.route('/restinfo')
        .get(restInfo.list_rest_info)
router.route('/restinfo/:passed_id')
        .get(restInfo.rest_info);

        // --------------------------  food Routes --------------------------------------
        var foodInfo = require('../foodinfo/foodinfoController');
        router.route('/foodinfo/:passed_id')
                .get(foodInfo.food_info);
                //--------------------------  Bookinfo Routes --------------------------------------
var bookInfo = require('../bookinfo/bookinfoController');
router.route('/bookinfo')
        .post(bookInfo.create_a_booking_session)
        router.route('/booksess')
        .post(bookInfo.create_a_session)



module.exports = router;

