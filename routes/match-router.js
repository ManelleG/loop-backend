const express = require("express");

const Match = require("../models/match-model.js");
const Trip = require("../models/trip-model.js");

const router = express.Router();

var googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAP_API_KEY,
  Promise: Promise
});

var db = [{
  city1: "habas, France",
  city2: "route de pau, orthez, France"
}, {
  city1: "amou, France",
  city2: "mugron, France"
}, {
  city1: "route de cazalis, momuy, France",
  city2: "amou, France"
}, {
  city1: "sallespisse, France",
  city2: "hagetmau, France"
}, {
  city1: "peyhorade, France",
  city2: "habas, France"
}, {
  city1: "dax, France",
  city2: "route de galin, tilh, France"
}
];


function calcUserDur(){
  googleMapsClient.directions(
    {	
      origin: "28 Av. des Champs-Élysées, 75008 Paris, France",
      destination: "20 Rue de Brigode, 59000 Lille, France",
      mode: "driving"
    }
  ).asPromise()
  .then((response) => {
    let userDur = response.json.routes[0].legs[0].duration.value
    console.log(userDur)
    console.log(response);
    return userDur;
  })
  .catch((err) => {
    console.log(err);
  });
};
  
//Calculates the best match when the trip that has been submitted is a driver trip
function calcBestMatchDriv(){

//   googleMapsClient.directions(
  
//   for (k = 0, lengg = db.length; k < lengg; k++) {
//     {	
//       origin: "28 Av. des Champs-Élysées, 75008 Paris, France",
//       destination: "20 Rue de Brigode, 59000 Lille, France",
//       waypoints: [{
//         location: db[k].city1,
//         stopover: true
//       }, {
//         location: db[k].city2,
//         stopover: true
//       }
//     ],
//       mode: "driving"
//     }
//   ).asPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// })

calcUserDur();




module.exports = router