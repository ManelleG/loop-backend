const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  departAddress: {
    type: { type: String, default: "Point"},
    string: { type: String },
    coordinates: [
      {type: Number}
    ]
  },
  arrivalAddress: {
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

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;