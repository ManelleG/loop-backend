const express = require("express");
//const GoogleMapsAPI = require('googlemaps');

const Match = require("../models/match-model.js");
const Trip = require("../models/trip-model.js");

const router = express.Router();

// const GoogleMapsAPI = require('googlemaps');
// var publicConfig = {
//   key: process.env.GOOGLE_MAP_API_KEY,
//   secure: true, // use https
// };
// var gmAPI = new GoogleMapsAPI(publicConfig);

var googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAP_API_KEY
});

var k;
var durconducteur;



var directionsService = new googleMapsClient.maps.DirectionsService();

function calcDrivDur(directionsService){

  directionsService.route(
    //1er argument de la fonction route: la requete trjat conducteur
    {	
      origin: "28 Av. des Champs-Élysées, 75008 Paris, France",
      destination: "20 Rue de Brigode, 59000 Lille, France",
      travelMode: googleMapsClient.maps.TravelMode.DRIVING
    }, 

    //2e arg de la fct route: call back function qui donne le trajet conducteur 
    function (response, status) {
      if (status === googleMapsClient.maps.DirectionsStatus.OK) {
        console.log(response);
      }
    }
  )
  durconducteur = response.routes[0].legs[0].duration.value
}

calcDrivDur(directionsService);


//RETRIEVE MATCHES RELATED TO A UNIQUE TRIP ID----------------------------------------
router.get("/trip/:tripId/matches", (req, res, next) => {

  const { tripId } = req.params;

  Trip.findById(tripId)
  .populate({path: 'user'})
  .then((result) => {
    const { startLocation: {coordinates: startCoor}, endLocation: {coordinates: endCoor} } = result;
    const { user: {isDriver} } = result;

    return Trip.findNear(startCoor, endCoor, isDriver)
    .then((tripResults) => {
      res.json(tripResults);
    })
  })
  .catch((err) => {
    next(err)
  })
})



module.exports = router