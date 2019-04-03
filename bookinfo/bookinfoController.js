'use strict';

var Booking = require('./bookinfoModel.js');

exports.create_a_booking_session = function (req, res) {
  console.log(req.body)
  if (!(req.body.CId)) {
    res.status(400).send({ error: true, message: 'Please provide CId' });
  }
  else {
    Booking.createBooking_session(req.body, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  }
};
exports.create_a_session = function (req, res) {
  console.log(req.body)
  if (!(req.body.SId && req.body.TId)) {
    res.status(400).send({ error: true, message: 'Please provide SId or TId' });
  }
  else {
    Booking.create_session(req.body, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  }
};
