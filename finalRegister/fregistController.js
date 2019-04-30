'use strict';
var sql = require('../db.js');

var fregist = require('./fregistModel.js');



exports.create_fregist = function (req, res) {
  

    
    
        sql.query("Select * from otpver where cemail = ?", req.body.email, function (err,rows, field) {
            if ( rows[0].otp_id != req.body.otp) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                
                fregist.createRegist(req.body, function (err, data) {
                    if (err)
                      res.send(err);
                    res.json(data);
                  });

                        
                    }
    
                });
            
        
    

    
  
  };
  




  /*fregist.createRegist(req.body, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
   */