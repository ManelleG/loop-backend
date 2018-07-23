const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  startLocation: {
    //type: { type: String, default: "Point"},
    string: { type: String },
    // coordinates: [
    //  {type: Number}
    // ]
  },
  endLocation: {
    //type: { type: String, default: "Point" },
    string: { type: String },
    // coordinates: [
    //  {type: Number}
    // ]
  },
  departDateAndTime: { type: Date, required: true},
  // departTime: { type: String, required: true},
  comment: { type: String },
  numberOfSeats: { type: Number }
}, {
  timestamps: true
})

// tripSchema.index({startLocation: '2dsphere'})
// tripSchema.index({endLocation: '2dsphere'})

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;