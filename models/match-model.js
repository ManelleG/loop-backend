const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matchSchema = new Schema({
  driverTripId: {
    type: Schema.Types.ObjectId,
    ref: "Trip",
    required: true
  },
  passengerTripId: {
    type: Schema.Types.ObjectId,
    ref: "Trip",
    required: true
  },
  acceptedByDriver: { type: Boolean, default: false },
  acceptedByPassenger: { type: Boolean, default: false }
}, {
  timestamps: true
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;