const express = require("express");
const bcrypt = require("bcrypt");
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

const User = require("../models/user-model.js");

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.cloudinary_name,
  api_key: process.env.cloudinary_key,
  api_secret: process.env.cloudinary_secret
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "user-pictures"
});
const uploader = multer({ storage });

// POST /settings
router.put("/settings", uploader.single("pictureUpload"), (req, res, next) => {
  const fields = [
    "firstName",
    "lastName",
    "phoneNumber",
    "pictureUrl",
    "gender",
    "address",
    "licenseNumber",
    "carModel",
    "specificNeedsA",
    "specificNeedsB",
    "oldPassword",
    "newPassword"
  ];

  const changes = {};

  fields.forEach(oneField => {
    const updateItem = req.body[oneField];

    if (updateItem) {
      changes[oneField] = updateItem;
    }
  });

  if (req.file) {
    changes.pictureURL = req.file.secure_url;
  }

  if (changes.oldPassword && changes.newPassword) {
    if (!bcrypt.compareSync(changes.oldPassword, req.user.encryptedPassword)) {
      next(err);
      return;
    }
    const encryptedPassword = bcrypt.hashSync(changes.newPassword, 10);
  }

  User.findByIdAndUpdate(req.user._id, { $set: changes }, { new: true })
    .then(userDoc => {
      res.json(userDoc);
    })
    .catch(err => {
      next(err);
    });
});

router.put("/addCar", (req, res, next) => {
  const car = {
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color,
    licensePlate: req.body.licensePlate,
    numberOfSeats: req.body.numberOfSeats
  };

  User.findByIdAndUpdate(req.user._id, { $push: { cars: car } }, { new: true })
    .then(userDoc => {
      res.json(userDoc);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
