'use strict';

var Registration = require('./registModel.js');

exports.create_a_registration = function(req, res) {
  if(!(req.body.email && req.body.name && req.body.phone)){
           res.status(400).send({ error:true, message: 'Please provide email/password' });
       }
else{
  Registration.createRegistration(req.body, function(err, data) {
   if (err)
     res.send(err);
   res.json(data);
 });
}
};
