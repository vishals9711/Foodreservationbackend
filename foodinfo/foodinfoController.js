'use strict';

var Food = require('./foodinfoModel.js');


exports.food_info = function (req, res) {

  Food.getFood(req.params.passed_id,function (err, food) {
    console.log('controller')
    if (err)
      res.send(err);
    
    res.send(food);
  });
  };










