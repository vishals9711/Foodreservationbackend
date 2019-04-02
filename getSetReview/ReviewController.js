'use strict';

var Review = require('./ReviewModel.js');

exports.customerReviews = function (req, res) {

    Review.getAllReviewsByRId(req.params.rId, function (err, review) {
      console.log('review info controller',review,'review info controller end');
      if (err)
        res.send(err);
      
      res.send(review);
    });
};

exports.avgRating = function (req, res) {

    Review.getAvgRatingByRId(req.params.rId, function (err, rating) {
        console.log('review info controller',review,'review info controller end');
      if (err)
        res.send(err);
      
      res.send(rating);
    });
};

exports.createReview = function (req, res) {
    var new_Review = new Review(req.body);

    Customer.createReview(new_Review, function (err, review) {
  
        if (err)
          res.send(err);

        res.json(review);
    });
    
  };