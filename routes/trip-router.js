const express = require("express");
const Trip = require("../models/trip-model.js");
const calcBestMatch = require("../googlemaps/GMsetup");

const router = express.Router();

// GET ALL TRIPS IN DB -----------------------------------------------------------------------
// router.get("/trips/all", (req, res, next) => {
//   Trip.find()
//   .then((tripResults) => {
//     res.json(tripResults);
//   })
//   .catch((err) => {
//     next(err);
//   });
// });

// CURRENT USER TRIPS -----------------------------------------------------------------------
router.get("/trips", (req, res, next) => {
  Trip.find( {user: req.user._id} )
  .sort({createdAt: -1})
  .then((tripResults) => {
    res.json(tripResults)
  })
  .catch((err) => {
    next(err);
  })
})

// CURRENT USER ADD TRIP PATH ----------------------------------------------------------------
router.post("/trips", (req, res, next) => {
  const {startAddress,
    startLongitude,
    startLatitude,
    endAddress,
    endLongitude,
    endLatitude,
    departDate,
    departHour,
    departMin,
    comment,
  //numberOfSeats
  } = req.body;

  //Data reformating to make the data the user entered fit the user model:
  const departDateAndTime = `${departDate} ${departHour}:${departMin}:00`;
  const startLocation = {string: startAddress, coordinates: [startLongitude, startLatitude] }
  const endLocation = {string: endAddress, coordinates: [endLongitude, endLatitude] }


  Trip.create({
    user: req.user._id,
    startLocation,
    endLocation,
    departDateAndTime,
    comment,
   // numberOfSeats
  })
  .then((tripDoc) => {
    res.json(tripDoc);
  })
  .catch((err) => {
    next(err);
  })
})


//FIND A SPECIFIC TRIP -----------------------------------------------------------------
router.get("/trip/:id", (req, res, next) => {
  const { id } = req.params;

  Trip.findById(id)
  .populate({path: 'user'})
    .then((tripDoc) => {
      tripDoc.user.encryptedPassword = undefined;
      res.json(tripDoc)
    })
    .catch((err) => {
      next(err)
    })
})

// UPDATE A SPECIFIC TRIPS --------------------------------------------------------------
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

// CURRENT USER DELETE A SPECIFIC TRIPS ----------------------------------------------
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

// //RETRIEVE MATCHES RELATED TO A UNIQUE TRIP ID----------------------------------------
router.get("/trip/:tripId/matches", (req, res, next) => {

  const { tripId } = req.params;

  Trip.findById(tripId)
  .populate({path: 'user'})
  .then((result) => {
    const { startLocation: {coordinates: startCoor}, endLocation: {coordinates: endCoor} } = result;
    const { user: {isDriver}, departDateAndTime } = result;

    return Trip.findNear(startCoor, endCoor, isDriver, departDateAndTime)
    .then((tripResults) => {
      tripResults.forEach((tripDoc) => {
        tripDoc.user.encryptedPassword = undefined;
      })
      return calcBestMatch(isDriver, result, tripResults)
      .then((matchResult)=> {
        res.json(matchResult)
      });
    });
  })
  .catch((err) => {
    next(err)
  });
});

module.exports = router