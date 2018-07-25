const express = require("express");

const Match = require("../models/match-model.js");
const Trip = require("../models/trip-model.js");

const router = express.Router();

//const GoogleMapsAPI = require('googlemaps');

// const GoogleMapsAPI = require('googlemaps');
// var publicConfig = {
//   key: process.env.GOOGLE_MAP_API_KEY,
//   secure: true, // use https
// };
// var gmAPI = new GoogleMapsAPI(publicConfig);

var googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAP_API_KEY
});


//var directionsService = new googleMapsClient.maps.DirectionsService();

var durconducteur;
function calcDrivDur(){

  googleMapsClient.directions(
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

calcDrivDur(directionsService, durconducteur);




module.exports = router