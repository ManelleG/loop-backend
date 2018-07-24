const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  startLocation: {
    type: { type: String, default: "Point"},
    string: { type: String },
    coordinates: [
     {type: Number}
    ]
  },
  endLocation: {
    type: { type: String, default: "Point" },
    string: { type: String },
    coordinates: [
     {type: Number}
    ]
  },
  departDateAndTime: { type: Date, required: true},
  // departTime: { type: String, required: true},
  comment: { type: String },
  numberOfSeats: { type: Number }
}, {
  timestamps: true
})

tripSchema.index({startLocation: '2dsphere'})
tripSchema.index({endLocation: '2dsphere'})




tripSchema.statics.findNear = function findNear(startCoor, endCoor){
  const startQuery =
  this.find({ startLocation: { $near: { $maxDistance: 50000, $geometry: { type: "Point", coordinates: startCoor}}}
  }).populate({path: 'user'});

  const endQuery =
  this.find({ endLocation: { $near: { $maxDistance: 50000, $geometry: { type: "Point", coordinates: endCoor}}}
  }).populate({path: 'user'});

  return Promise.all([startQuery, endQuery])
  .then((results)=>{
    const [startResults, endResults] = results;

    const intersectionResults = [];

    startResults.forEach((docA) => {
      endResults.forEach((docB) => {
        if (docA._id.toString() === docB._id.toString()){
          intersectionResults.push(docA)
        }
      })
    })
    return intersectionResults
  })

}

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;