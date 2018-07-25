const express = require("express");

const Match = require("../models/match-model.js");
const Trip = require("../models/trip-model.js");

const router = express.Router();

var googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAP_API_KEY,
  Promise: Promise
});



function calcDrivDur(){

  googleMapsClient.directions(
    //1er argument de la fonction directions: la requete trajet conducteur
    {	
      origin: "28 Av. des Champs-Élysées, 75008 Paris, France",
      destination: "20 Rue de Brigode, 59000 Lille, France",
      mode: "driving"
    }, 

    //2e arg de la fct directions: call back function qui donne le trajet conducteur 
    function(err, response) {
      console.log(err);
      console.log(response);
       //durconducteur = response.routes[0].legs[0].duration.value

        if (!err) { 
        callback(response.json.results.routes[0].legs[0].duration.value);
        //console.log(response.routes[0].legs[0].duration.value)
        };
    }
  );
};
  
 var input = {
  origin: "28 Av. des Champs-Élysées, 75008 Paris, France",
  destination: "20 Rue de Brigode, 59000 Lille, France",
  mode: "driving"
 }


calcDrivDur();




module.exports = router