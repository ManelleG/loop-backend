const express = require("express");

const Match = require("../models/match-model.js");
const Trip = require("../models/trip-model.js");

const router = express.Router();

var googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_MAP_API_KEY,
  Promise: Promise
});



//DEFINITIONS:
// AD trip = trip posted by a driver or a passenger (no waypoints)
// ABCD trip = trip calculated by the algorithm to go from the driver's departure location to his arrival location
//with two stopovers to pick up and drop off passenger

//Calculates the duration of the original trip posted by a user (AD trip)
function calcUserDur(userTrip){
  googleMapsClient.directions(
    {
      origin: [userTrip.startLocation.coordinates[1],userTrip.startLocation.coordinates[0]],
      destination: [userTrip.endLocation.coordinates[1],userTrip.endLocation.coordinates[0]],
      mode: "driving"
    }
  ).asPromise()
  .then((response) => {
    let userDur = response.json.routes[0].legs[0].duration.value
    return userDur;
  })
  .catch((err) => {
    console.log(err);
  });
};

//Calculates the best match when the trip that has been submitted is a passenger trip (best ABCD Trip)
function calcBestMatch(isDriver, userTrip, db){

  var mindur = 99999999;
  var counter = 0;
  var total = db.length;
	var minresponse;
  var mintripID;
  var BestMatchPass = {};
  //iterating through the array of driver trips to get all the ABCD trips possible for one BC trip
  var googleRequests =
    db.map((item, k) => {
      var options = isDriver
        ? {
          origin: [userTrip.startLocation.coordinates[1],userTrip.startLocation.coordinates[0]],
          destination: [userTrip.endLocation.coordinates[1],userTrip.endLocation.coordinates[0]],
          waypoints: [[db[k].startLocation.coordinates[1],db[k].startLocation.coordinates[0]],[db[k].endLocation.coordinates[1],db[k].endLocation.coordinates[0]]],
          mode: "driving"
        } : {
          origin: [db[k].startLocation.coordinates[1],db[k].startLocation.coordinates[0]],
          destination: [db[k].endLocation.coordinates[1],db[k].endLocation.coordinates[0]],
          waypoints: [ [userTrip.startLocation.coordinates[1],userTrip.startLocation.coordinates[0]],[userTrip.endLocation.coordinates[1],userTrip.endLocation.coordinates[0]] ],
          mode: "driving"
        };
      return googleMapsClient.directions(options).asPromise()
      .then((response) => {
        console.log("K =", k);
        counter ++;
        console.log("counter = ", counter);

        let dur = 0;
        let ABCDTripPortionsArray = response.json.routes[0].legs

        //for each ABCD trip, storing the total duration of the trip (by adding each portion) in seconds
        //explanation: the response object doesnt give the total duration but only the duration for each portion, in seconds
        for (var j = 0; j < ABCDTripPortionsArray.length; j++) {
          dur += ABCDTripPortionsArray[j].duration.value;
        }
        //console.log("duration = ", dur/60, "min")


        //comparing the duration of each ABCD trips for any BC waypoints
        if (dur < mindur) {
          mindur = dur;
          mintripID = db[k]._id;
          BestMatchPass.trip = db[k];
          BestMatchPass.dur = mindur;
        }

      });
    });

  return Promise.all(googleRequests)
    .then(() => {
      console.log("final best match =", mintripID)
      return BestMatchPass;
    });
}



//FAKE VARIABLES TO TEST THE FUNCTIONS
//------------------------------------------------------------------------------------------------------------------
var randomUserTrip = {
  _id: 8,
  startAddress: "48.827885,2.327024",
  //petit montrouge 75014 Paris
  endAddress: "48.872150,2.299261"
  //Champs elysées paris
}
//console.log(calcUserDur(randomUserTrip));


var db = [{
  _id: 1,
  startAddress: "48.837016,2.297333",
//195 rue de la convention, 75015
  endAddress: "48.848643,2.301280"
//Grenelle 75015
}, {
  _id: 2,
  startAddress: "48.848268,2.396545",
  //Place de la nation, 75012
  endAddress: "48.870577,2.388085"
  //Belleville, 75020
}, {
  _id: 3,
  startAddress: "48.826108,2.360310",
  //quartier de la gare 75013
  endAddress: "48.886932,2.304300"
//Monceau, 75017
}
];

// calcBestMatch(false, randomUserTrip, db);

module.exports = calcBestMatch;
