'use strict';

var Login = require('./LoginModel.js');

exports.authenticateUser = function(req, res) {
   if(!(req.body.email && req.body.password)){
            res.status(400).send({ error:true, message: 'Please provide email/password' });
        }
else{
  Login.authenticateUser(req.body, function(err, authStatus) {
    if (err)
      res.send(err);
    res.json(authStatus);
  });
}
};

