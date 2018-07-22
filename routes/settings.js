const express = require("express");
const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");
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
router.post(
  "/settings",
  uploader.single("pictureUpload"),
  bodyparser.json(),
  (req, res, next) => {
    const fields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "isDriver",
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
      if (
        !bcrypt.compareSync(changes.oldPassword, req.user.encryptedPassword)
      ) {
        req.flash("error", "Old password incorrect");
        res.redirect("/settings");
        return;
      }
      const encryptedPassword = bcrypt.hashSync(changes.newPassword, 10);
    }

    User.findByIdAndUpdate(req.user._id, { $set: changes })
      .then(userDoc => {
        req.flash("success", "Settings saved successfully");
        res.redirect("/");
      })
      .catch(err => {
        next(err);
      });
  }
);
