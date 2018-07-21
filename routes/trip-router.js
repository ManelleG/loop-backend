const express = require("express");
const Trip = require("../models/trip-model.js");

const router = express.Router();

router.get("/trips", (req, res, next) => {
  Trip
  .find()
  .then((tripResults) => {
    res.json(tripResults);
  })
  .catch((err) => {
    next(err);
  });
});

router.post("/trips", (req, res, next) => {
  const {departAddress,
    arrivalAddress,
    departDate,
    departTime,
    comment,
    numberOfSeats} = req.body;

  Trip.create({
    user: req.user._id,
    departAddress,
    arrivalAddress,
    departDate,
    departTime,
    comment,
    numberOfSeats
  })
  .then((tripDoc) => {
    res.json(tripDoc);
  })
  .catch((err) => {
    next(err);
  })
})

module.exports = router;