const express = require("express");
const router = express.Router();

//--------------------------------  Login Routes ------------------------------------------
var loginController = require("../Login/LoginController");
router.route("/authenticateUser").post(loginController.authenticateUser);
router.route("/authenticateManager").post(loginController.authenticateManager);

//--------------------------  customerList Routes --------------------------------------
var customerList = require("../Customer/CustController");
router.route("/customers").get(customerList.list_all_customers);
router
        .route("/customers/:customerId")
        .get(customerList.read_a_customer)
        .get(customerList.read_a_customer)
        .put(customerList.update_a_customer)
        .delete(customerList.delete_a_customer);
router.route("/customers/:email").get(customerList.read_a_customer_email);

//--------------------------  RegistrationList Routes --------------------------------------
var registrationList = require("../registration/registController");
router.route("/registration").post(registrationList.create_Registration);

var otpl = require("../otpver/otpController");
router.route("/otpver").post(otpl.create_a_otp);

var fregistx = require("../finalRegister/fregistController");
router.route("/finalRegister").post(fregistx.create_fregist);


var restPend = require("../restpend/restpendController");
router
        .route("/restpend")
        .get(restPend.list_rest_info);

var restPrep = require("../restprep/restprepController");
router
        .route("/restprep")
        .get(restPrep.list_rest_info);

var restRead = require("../restread/restreadController");
router
        .route("/restread")
        .get(restRead.list_rest_info);

var restServe = require("../restserve/restserveController");
router
        .route("/restserve")
        .get(restServe.list_rest_info);

var Notifs = require("../notifs/notifsController");
router
        .route("/notifs")
        .get(Notifs.customerReviews);


//--------------------------  restaurant Routes --------------------------------------
var restInfo = require('../restinfo/restinfoController');
router.route('/restinfo')
        .get(restInfo.list_rest_info)
        .post(restInfo.editRestaurantInfo);
router.route('/restinfo_del')
        .post(restInfo.removeRestaurant);
router.route('/restinfo/:passed_id')
        .get(restInfo.rest_info);
router.route("/table_info/:passed_id")
        .get(restInfo.getTable);




// --------------------------  food Routes --------------------------------------
var foodInfo = require('../foodinfo/foodinfoController');
router.route('/foodinfo/:passed_id')
        .get(foodInfo.food_info);
router.route('/foodinfo_getItem/:IdString')
        .get(foodInfo.menuItemInfo);
router.route('/foodinfo_itemEdit')
        .post(foodInfo.editItemData);
router.route('/foodinfo_del')
        .post(foodInfo.removeMenuItem);
router.route('/foodinfo_insert')
        .post(foodInfo.addNewMenuItem);


//--------------------------  Bookinfo Routes --------------------------------------
var bookInfo = require('../bookinfo/bookinfoController');
router.route('/bookinfo')
        .post(bookInfo.create_a_booking_session);
router.route('/booksess')
        .post(bookInfo.create_a_session);

//--------------------------  ReviewList Routes --------------------------------------
var ReviewList = require("../getSetReview/ReviewController");
router.route("/getSetReview/:passed_id").get(ReviewList.customerReviews);
router.route("/getSetReview").post(ReviewList.createReview);
//--------------------------------Order Routes-----------------------------------
var orderList = require("../order/orderController");
router.route("/order").post(orderList.create_a_order);
//---------------------------------orders---------------------------
var Accpt = require("../accept/acceptController");
router.route("/accept")
        .post(Accpt.accept_order);



module.exports = router;
