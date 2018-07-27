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
        // select: {"user": "_id"}
        })
      .populate({
        path: "passengerTripId",
        populate: { path: "user" }
        })
      .then((results) =>{
        endResult = results;

        endResult =
        endResult.filter(matchDoc => (matchDoc.driverTripId && matchDoc.passengerTripId));

        endResult.forEach((matchDoc) => {
          matchDoc.passengerTripId.user.encryptedPassword = undefined;
        })

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
      })
      .populate({
        path: "driverTripId",
        populate: { path: "user" }
        })
    .then((results) =>{
      endResult = results;

      endResult =
        endResult.filter(matchDoc => (matchDoc.driverTripId && matchDoc.passengerTripId));

      endResult.forEach((matchDoc) => {
        matchDoc.driverTripId.user.encryptedPassword = undefined;
      })

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


//VIEW AN INDIVIDUAL MATCH-----------------------------------------------------------------------------
router.get("/match/:matchId", (req, res, next) => {
  const { matchId } = req.params;

  Match.findById(matchId)
    .then((matchDoc) => {
      res.json(matchDoc)
    })
    .catch((err) => {
      next(err)
    })
})

//SEARCH STATUS OF A TRIP IN RELATION TO MATCHES -------------------------------------------------------
router.get("/match/check/:tripId", (req, res, next) => {
  const { tripId } = req.params;

  Match.find()
    .or([{passengerTripId: tripId}, {driverTripId: tripId}])
    .then((matchDoc) => {
      res.json(matchDoc)
    })
    .catch((err) => {
      next(err)
    })
})


//ACCEPT/REMOVE A MATCH --------------------------------------------------------------------------------------
router.put("/match/:matchId", (req, res, next) => {
  const { matchId } = req.params;

  const { isDriver } = req.user;

  Match.findById(matchId)
    .then((matchDoc) => {
      const driverResValue = matchDoc.acceptedByDriver;
      const passengerResValue = matchDoc.acceptedByPassenger;

      if (isDriver){
        Match.findByIdAndUpdate(
          matchId,
          {$set: {acceptedByDriver: !driverResValue}},
          { runValidators: true, new: true}
        )
          .then((matchDoc) => {
            res.json(matchDoc)
          })
          .catch((err) => {
            next(err);
          })
        }
        else {
          Match.findByIdAndUpdate(
            matchId,
            {$set: {acceptedByPassenger: !passengerResValue}},
            { runValidators: true, new: true}
          )
            .then((matchDoc) => {
              res.json(matchDoc)
            })
          }
        })
        .catch((err) => {
          next(err);
        })
})


router.delete("/match/:matchId", (req, res, next) => {
  const { matchId } = req.params;

  Match.findByIdAndRemove(matchId)
    .then((matchDoc) => {
      res.json(matchDoc);
    })
    .catch((err) => {
      next(err);
    });
})

module.exports = router;