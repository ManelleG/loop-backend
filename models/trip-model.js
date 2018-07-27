const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    startLocation: {
      type: { type: String, default: "Point" },
      string: { type: String },
      coordinates: [{ type: Number }]
    },
    endLocation: {
      type: { type: String, default: "Point" },
      string: { type: String },
      coordinates: [{ type: Number }]
    },
    departDateAndTime: { type: Date, required: true },
    // departTime: { type: String, required: true},
    comment: { type: String },
    numberOfSeats: { type: Number }
  },
  {
    timestamps: true
  }
);

tripSchema.index({ startLocation: "2dsphere" });
tripSchema.index({ endLocation: "2dsphere" });

tripSchema.statics.findNear = function findNear(
  startCoor,
  endCoor,
  role,
  time
) {
  const timeFrame = 180;
  const timeBefore = new Date(time.getTime() - timeFrame * 60000);
  const timeAfter = new Date(time.getTime() + timeFrame * 60000);

  const startQuery = this.find({
    startLocation: {
      $near: {
        $maxDistance: 100000,
        $geometry: { type: "Point", coordinates: startCoor }
      }
    },
    departDateAndTime: { $gte: timeBefore, $lte: timeAfter }
  }).populate({ path: "user" });

  const endQuery = this.find({
    endLocation: {
      $near: {
        $maxDistance: 100000,
        $geometry: { type: "Point", coordinates: endCoor }
      }
    }
  }).populate({ path: "user" });

  return Promise.all([startQuery, endQuery]).then(results => {
    const [startResults, endResults] = results;

    let intersectionResults = [];

    startResults.forEach(docA => {
      endResults.forEach(docB => {
        if (docA._id.toString() === docB._id.toString()) {
          intersectionResults.push(docA);
        }
      });
    });

    intersectionResults = intersectionResults.filter(
      tripDoc => tripDoc.user.isDriver !== role
    );

    return intersectionResults;
  });
};

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
