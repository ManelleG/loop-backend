const express = require("express");
const Trip = require("../models/trip-model.js");

const router = express.Router();

// GET ALL TRIPS IN DB ------------------------------
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

// CURRENT USER ADD TRIP PATH ----------------------
router.post("/trips", (req, res, next) => {
  const {startAddress,
    startLatitude,
    startLongitude,
    endAddress,
    endLatitude,
    endLongitude,
    departDate,
    departTime,
    comment,
    numberOfSeats} = req.body;

  const departDateAndTime = `${departDate} ${departTime}`;
  const departAddress = {string: startAddress, coordinates: [startLatitude, startLongitude] }
  const arrivalAddress = {string: endAddress, coordinates: [endLatitude, endLongitude] }

  Trip.create({
    user: req.user._id,
    departAddress,
    arrivalAddress,
    departDateAndTime,
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

// CURRENT USER TRIPS ---------------------------
router.get("/user/trips", (req, res, next) => {
  Trip.find( {user: req.user._id} )
  .then((tripResults) => {
    res.json(tripResults)
  })
  .catch((err) => {
    next(err);
  })
})

// CURRENT USER UPDATE THEIR TRIPS -------------------------
router.put("/trip/:id", (req, res, next) => {
  const { id } = req.params;

  const fields = ["startAddress",
    "startLatitude",
    "startLongitude",
    "endAddress",
    "endLatitude",
    "endLongitude",
    "departDate",
    "departTime",
    "comment",
    "numberOfSeats"];

  const changes = {};

  fields.forEach((oneField) => {
    const updateItem = req.body[oneField];

    if (updateItem) {
      changes[oneField] = updateItem;
    }
  })

  Trip.findByIdAndUpdate(
    id,
    {$set: changes },
    { runValidators: true, new: true }
  )
  .then((tripDoc) => {
    res.json(tripDoc)
  })
  .catch((err) => {
    next(err);
  });
})

// CURRENT USER DELETE THEIR TRIPS -------------------------
router.delete("/trip/:id", (req, res, next) => {
  const { id } = req.params;

  Trip.findByIdAndRemove(id)
    .then((tripDoc) => {
      res.json(tripDoc);
    })
    .catch((err) => {
      next(err);
    });
})



module.exports = router