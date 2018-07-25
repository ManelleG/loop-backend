const express = require("express");
const Match = require("../models/match-model.js")
const User = require("../models/user-model.js")
const Trip = require("../models/trip-model.js")

const router = express.Router();


//GET ALL MATCHES RELATED TO CONNECTED USER ------------------------------------------------------------------------
router.get("/matches", (req, res, next) => {

  let endResult;

  const {isDriver} = req.user;

  if (isDriver){
    Match.find()
      .populate({
        path: "driverTripId",
        match: {"user": req.user._id},
        select: "user"
        })
      .then((results) =>{
        endResult = results;

        endResult =
        endResult.filter(matchDoc => (matchDoc.driverTripId && matchDoc.passengerTripId));

        res.json(endResult)
      })
      .catch((err) => {
        next(err);
      })
  }
  else {
    Match.find()
    .populate({path: "passengerTripId",
      match: {"user": req.user._id},
      select: "user"
      })
    .then((results) =>{
      endResult = results;

      endResult =
        endResult.filter(matchDoc => (matchDoc.driverTripId && matchDoc.passengerTripId));

        res.json(endResult)
    })
    .catch((err) => {
      next(err);
    })
  }
})

// REQUEST A NEW MATCH ----------------------------------------------------------
router.post("/trip/:tripId/matches", (req, res, next) => {
  const {tripId} = req.params;
  const {matchId} = req.body;

  User.findById(req.user._id)
    .then((userDoc) => {
      if (userDoc.isDriver){
        Match.create({
          driverTripId: tripId,
          passengerTripId: matchId,
          acceptedByDriver: true
        })
        .then((matchDoc) => {
          res.json(matchDoc)
        })
      }
      else {
        Match.create({
          driverTripId: matchId,
          passengerTripId: tripId,
          acceptedByPassenger: true
        })
        .then((matchDoc) => {
          res.json(matchDoc)
        })
      }
    })
    .catch((err) => {
      next(err);
    })
})


//ACCEPT A MATCH --------------------------------------------------------------------------------------
router.put("/match/:matchId", (req, res, next) => {
  const {matchId} = req.params;

  Match.find(matchId)
    .then((matchDoc) => {
      if (matchDoc){}
    })
    .catch((err) => {
      next(err);
    })
})



module.exports = router;