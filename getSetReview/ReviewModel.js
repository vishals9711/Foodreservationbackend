'user strict';
var sql = require('../db.js');

//Review object constructor
var Review = function (review) {
    this.review = review.review;
    this.status = review.status;
    this.created_at = new Date();
};


Review.createReview = function createReview(reviewInfo, result) {
    sql.query("INSERT into rest_reviews (RId, RReview, RRating, CId) VALUES (?,?,?,?,?)", [reviewInfo.RId, reviewInfo.RReview, reviewInfo.RRating, reviewInfo.CId], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res);
            result(null, res);
        }
    });
};

Review.getAllReviewsByRId = function getAllReviewsByRId(rId, result) {
    sql.query("Select RReview,RRating,CName from rest_reviews JOIN customer on rest_reviews.CId = customer.CId where RId = ? ", rId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Review.getAvgRatingByRId = function getAvgRatingByRId(rId, result) {
    sql.query("Select avg(RRating) as avgRating from rest_reviews where RId = ? ", rId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};


module.exports = Customer;