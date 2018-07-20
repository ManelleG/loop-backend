const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  departAddress: {
    string: { type: String, required: true},
    lat: { type: Number },
    long: { type: Number },
  },
  arrivalAddress: {
    string: { type: String, required: true},
    lat: { type: Number },
    long: { type: Number },
  },
  departDate: { type: Date, required: true},
  departTime: { type: String, required: true},
  comment: { type: String },
  numberOfSeats: { type: Number }
}, {
  timestamps: true
})

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;