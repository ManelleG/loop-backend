const express = require("express");

const Match = require("../models/match-model.js");
const Trip = require("../models/trip-model.js");

const router = express.Router();

var googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_MAP_API_KEY,
  Promise: Promise
});



//DEFINITIONS:
// AB trip = trip posted by a driver or a passenger (no waypoints)
// ABCD trip = trip calculated by the algorithm to go from the driver's departure location to his arrival location 
//with two stopovers to pick up and drop off passenger

//Calculates the duration of the original trip posted by a user ()

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
  
//Calculates the best match when the trip that has been submitted is a driver trip
function calcBestMatchDriv(userTrip, db){

  //iterating through the array of passenger trips to get all the ABCD trips possible for one AB trip
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
      let ABCDTripRoutesArray = response.json.routes[0].legs

      //for each ABCD trip, storing the shortest way to get to the 4 locations
      for (var j = 0; j < ABCDTripRoutesArray.length; j++) {
        dur += ABCDTripRoutesArray[j].duration.value;
      }
      //console.log("duration = ", dur/60);

           //boucle sur les trajets Passager pour enregistrer la ville de départ et d'arrivée du trajet Passager
        // qui correspond à la valeur dur calculée juste au dessus
				//for (l = 0; l < db.length; l++) {
					// if (db[l].city1 == response.request.waypoints[0].location.query && db[l].city2 == response.request.waypoints[1].location.query) {
					// 	console.log("found city1 " + db[l].city1);
					// 	console.log("found city2 " + db[l].city2);
					// 	break;
					// }
        //}

                //on compare la durée de chaque trajet ABCD pour toutes les valeurs B et C
				db[k].dur = dur;
        db[k].response = response;
        let mindur;
				if (dur < mindur) {
					mindur = dur;
          minresponse = response;
          var mintripID = db[k].tripID;
					var mincity1 = db[k].startAddress;
					var mincity2 = db[k].endAddress;
        }
        console.log(mintripID);
        console.log(mindur);
        console.log(mincity1);
        console.log(mincity2);
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
