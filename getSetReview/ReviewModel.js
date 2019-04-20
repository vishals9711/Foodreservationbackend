'user strict';
var sql = require('../db.js');

//Review object constructor
var Review = function (review) {
    this.review = review.review;
};


Review.setAvgRatingByRId = function getAvgRatingByRId(passed_id, result) {
    sql.query("update rest_info inner JOIN ( SELECT rest_reviews.RId, AVG(rest_reviews.RRating) as avgRating from rest_reviews where rest_reviews.RId= ? ) b on rest_info.RId=b.RId set rest_info.RRating = avgRating where rest_info.RId = ?", passed_id, passed_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            
           result(null, res);

        }
    });
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

Review.getAllReviewsByRId = function getAllReviewsByRId(passed_id, result) {
    sql.query("Select RReview,RRating,CName from rest_reviews JOIN customer on rest_reviews.CId = customer.CId where RId = ? ", passed_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log('review model start',res,'review model end');
            result(null, res);

        }
    });
};




//sql.query("update rest_info inner JOIN ( SELECT rest_reviews.RId, AVG(rest_reviews.RRating) as avgRating from rest_reviews where rest_reviews.RId= ? ) b on rest_info.RId=b.RId set rest_info.RRating = avgRating where rest_info.RId = ?", rId, rId)

module.exports = Review;