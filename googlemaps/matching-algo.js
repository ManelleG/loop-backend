var googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyBxp25VtQir86dy8rbjpQCAo4XtTMw8TzM",
  Promise: Promise
});


//DEFINITIONS:
// ABCD trip = trip from the driver's departure location to his arrival location 
//             with two stopovers (pick up and drop off passenger)


// Calculates the duration of the original trip posted by a user
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


function calcBestMatch(isDriver, userTrip, db){

  let minDur = Number.MAX_VALUE;
  const bestMatch = {};

  //for each trip in the array, we ask google map for the duration of the ABCD trip
  const googleRequests =
    db.map(currentTrip => {

      const userStartLat = userTrip.startLocation.coordinates[1];
      const userStartLong = userTrip.startLocation.coordinates[0];

      const userEndLat = userTrip.endLocation.coordinates[1];
      const userEndLong = userTrip.endLocation.coordinates[0];

      const currentTripStartLat= currentTrip.startLocation.coordinates[1];
      const currentTripStartLong = currentTrip.startLocation.coordinates[0];

      const currentTripEndLat= currentTrip.endLocation.coordinates[1];
      const currentTripEndLong = currentTrip.endLocation.coordinates[0];

      const itinerary = isDriver
        ? {
          origin: [userStartLat, userStartLong],
          destination: [userEndLat, userEndLong],
          waypoints: [
            [currentTripStartLat, currentTripStartLong],
            [currentTripEndLat, currentTripEndLong]
          ],
          mode: "driving"
        } : {
          origin: [currentTripStartLat, currentTripStartLong],
          destination: [currentTripEndLat, currentTripEndLong],
          waypoints: [ 
            [userStartLat, userStartLong],
            [userEndLat, userEndLong] 
          ],
          mode: "driving"
        };

      return googleMapsClient.directions(itinerary).asPromise()
        .then(response => {

          let {legs} = response.json.routes[0]

          //calculating the duration of one ABCD trip (by adding each leg) in seconds
          //(the response object doesnt give the total duration of a trip but only the duration for each leg)
          const dur = legs.reduce((duration, currentLeg)=> {
            return duration += currentLeg.duration.value;
          }, 0)

          //one we ve got the duration of one ABCD trip, 
          //we store that trip only if it is shorter than the other ones we've calculated so far
          if (dur < minDur) {
            minDur = dur;
            bestMatch.trip = currentTrip;
            bestMatch.dur = minDur;
          }

        })
        .catch(err => console.log("Error calculating one trip duration", err));
    });

  return Promise.all(googleRequests)
    .then(() => bestMatch)
    .catch(err => console.log("error calculating best match", err));
}



//FAKE VARIABLES TO TEST THE FUNCTIONS
//------------------------------------------------------------------------------------------------------------------
const randomUserTrip = {
  _id: 8,
  startLocation: {
    coordinates: [2.327024, 48.827885]
  },
  //petit montrouge 75014 Paris
  endLocation: {
    coordinates: [2.299261, 48.872150]
  }
  //Champs elysées paris
}
//console.log(calcUserDur(randomUserTrip));


const db = [{
    _id: 1,
    startLocation: {
      coordinates: [2.297333, 48.837016]
    },
  //195 rue de la convention, 75015
    endLocation: {
      coordinates: [2.301280, 48.848643]
    }
  //Grenelle 75015
  }, {
    _id: 2,
    startLocation: {
      coordinates: [2.396545, 48.848268]
    },
    //Place de la nation, 75012
    endLocation: {
      coordinates: [2.388085, 48.870577]
    }
    //Belleville, 75020
  }, {
    _id: 3,
    startLocation: {
      coordinates: [2.360310, 48.826108]
    },
    //quartier de la gare 75013
    endLocation: {
      coordinates: [2.304300, 48.886932]
    }
  //Monceau, 75017
  }
];

calcBestMatch(false, randomUserTrip, db)

module.exports = calcBestMatch;
