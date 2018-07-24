const express = require("express");
const Trip = require("../models/trip-model.js");

const router = express.Router();

// GET ALL TRIPS IN DB ------------------------------
router.get("/trips", (req, res, next) => {
  Trip.find()
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
    startLongitude,
    startLatitude,
    endAddress,
    endLongitude,
    endLatitude,
    departDate,
    departTime,
    comment,
    numberOfSeats} = req.body;

  const departDateAndTime = `${departDate} ${departTime}`;
  const startLocation = {string: startAddress, coordinates: [startLongitude, startLatitude] }
  const endLocation = {string: endAddress, coordinates: [endLongitude, endLatitude] }

  Trip.create({
    user: req.user._id,
    startLocation,
    endLocation,
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

//FIND A SPECIFIC TRIP -----------------------------------------
router.get("/trip/:id", (req, res, next) => {
  const { id } = req.params;

  Trip.findById(id)
    .then(() => {

    })
    .catch(() => {

    })
})

// CURRENT USER UPDATE A SPECIFIC TRIPS -------------------------
router.put("/trip/:id", (req, res, next) => {
  const { id } = req.params;

  const fields = ["startAddress",
    "startLongitude",
    "startLatitude",
    "endAddress",
    "endLongitude",
    "endLatitude",
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

// CURRENT USER DELETE A SPECIFIC TRIPS -------------------------
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

//RETRIEVE MATCHES RELATED TO A UNIQUE TRIP ID
router.get("/trip/find/:tripId", (req, res, next) => {

  const { tripId } = req.params;

  Trip.findById(tripId)
  .then((result) => {
    const { startLocation: {coordinates: startCoor}, endLocation: {coordinates: endCoor} } = result;

    return Trip.findNear(startCoor, endCoor)
    .then((tripResults) => {
      res.json(tripResults);
    })
  })
  .catch((err) => {
    next(err)
  })
})

// router.get("/trip/:tripId/start", (req, res, next) => {

//   const { tripId } = req.params;

//   Trip.findById(tripId)
//   .then((result) => {
//     const { startLocation: {startLatitude, startLongitude} } = result;

//     return Trip.find({ startLocation: { $near: { $maxDistance: 100000, $geometry: { type: "Point", coordinates: [startLongitude, startLatitude]}}}
//     })
//     .populate({path: 'user', select: 'isDriver'})
//     .then((tripResults) => {
//       res.json(tripResults);
//     })
//   })
//   .catch((err) => {
//     next(err)
//   })
// })

// router.get("/trip/end", (req, res, next) => {
//   Trip
//   .then((tripResults) => {
//     res.json(tripResults);
//   })
//   .catch((err) => {
//     next(err)
//   })
// })

module.exports = router