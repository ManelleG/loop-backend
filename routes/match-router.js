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
      origin: userTrip.startAddress,
      destination: userTrip.endAddress,
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
  
//Calculates the best match when the trip that has been submitted is a driver trip (best ABCD Trip)
function calcBestMatchDriv(userTrip, db){

  var mindur = 99999999;
	var minresponse;
	var mintripID;
  //iterating through the array of passenger trips to get all the ABCD trips possible for one AD trip
  for(let k = 0; k < db.length; k++) {
    googleMapsClient.directions(
      {	
        origin: userTrip.startAddress,
        destination: userTrip.endAddress,
        waypoints: [db[k].startAddress,db[k].endAddress],
        mode: "driving"
      }
    ).asPromise()
    .then((response) => {
      //console.log(response);

      let dur = 0;
      let ABCDTripPortionsArray = response.json.routes[0].legs

      //for each ABCD trip, storing the total duration of the trip (by adding each portion) in seconds
      //explanation: the response object doesnt give the total duration but only the duration for each portion, in seconds
      for (var j = 0; j < ABCDTripPortionsArray.length; j++) {
        dur += ABCDTripPortionsArray[j].duration.value;
      }
      //console.log("duration = ", dur/60, "min");


      //on compare la durée de chaque trajet ABCD pour toutes les addresses B-C
      db[k].dur = dur;
      db[k].response = response;

      if (dur < mindur) {
        mindur = dur;
        minresponse = response;
        mintripID = db[k].tripID;
      } 
      // console.log(mintripID);
      // console.log(mindur);
    })
    .catch((err) => {
      console.log('ERREUR impossible de calculer le trajet a cause de : ', err);
    });
  }
}



//FAKE VARIABLES TO TEST THE FUNCTIONS
//------------------------------------------------------------------------------------------------------------------
var randomUserTrip = {
  startAddress: "48.79076259999999,2.5068955000000415",
  endAddress: "48.8807681,2.3505747000000383"
}
//console.log(calcUserDur(randomUserTrip));


var db = [{
  tripID: 1,
  startAddress: 
  "48.8807681,2.3505747000000383",
  endAddress: "48.8407592,2.3155053000000407"
}, {
  tripID: 2,
  startAddress: "48.79076259999999,2.5068955000000415",
  endAddress: "48.8807681,2.3505747000000383"
}, {
  tripID: 3,
  startAddress: "48.85901039999999,2.3461141000000225",
  endAddress: "48.8412221,2.3182999000000564"}
];
calcBestMatchDriv(randomUserTrip, db);


module.exports = router;
