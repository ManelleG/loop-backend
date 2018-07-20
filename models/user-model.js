const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^.+@.+\..+$/
    },
    phoneNumber: { type: String, required: true, },
    isDriver: { type: Boolean, required: true },
    encryptedPassword: { type: String },
    pictureURL: {
      type: String,
      default: ""
    },
    gender: {
      type: String,
      enum: ["Homme", "Femme"]
    },
    address: {
      string: { type: String },
      lat: { type: Number },
      long: { type: Number }
    },
    licenseNumber: { type: String },
    carModel: [
      {
        brand: { type: String },
        model: { type: String },
        color: { type: String },
        licensePlate: { type: String },
        numberOfSeats: { type: Number }
      }
    ],
    specificNeedsA: [
      {
        need: {type: String }
      }
    ],
    specificNeedsB: { type: String }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
