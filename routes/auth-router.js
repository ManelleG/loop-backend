const express = require("express");
const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");

const User = require("../models/user-model.js");

const router = express.Router();

// POST /signup
router.post("/signup", bodyparser.json(), (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    isDriver,
    originalPassword
  } = req.body;

  if (originalPassword === "" || originalPassword.match(/[0-9]/) === null) {
    // bad password (is blank or doesn't have a number)
    const err = new Error("Password can't be blank and must have a number");
    next(err);
    return;
  }

  // we are ready to save the user if we get this far
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    encryptedPassword,
    isDriver
  })
    .then(userDoc => {
      req.login(userDoc, () => {
        // hide encryptedPassword before sending the JSON (it's a security risk)
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      });
    })
    .catch(err => {
      next(err);
    });
});

// POST /signupPlus
// router.post

// POST /login
router.post("/login", (req, res, next) => {
  const { email, loginPassword } = req.body;

  // check the email by searching the database
  User.findOne({ email })
    .then(userDoc => {
      if (!userDoc) {
        // create an Error object for "next(err)"
        const err = new Error("Email not found");
        next(err);
        return;
      }

      // we are ready to check the password if we get this far
      const { encryptedPassword } = userDoc;
      if (!bcrypt.compareSync(loginPassword, encryptedPassword)) {
        const err = new Error("Wrong password");
        next(err);
        return;
      }

      // we are ready to LOG THEM IN if we get this far
      req.logIn(userDoc, () => {
        // hide encryptedPassword before sending the JSON (it's a security risk)
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      });
    })
    .catch(err => {
      next(err);
    });
});

// DELETE /logout
router.delete("/logout", (req, res, next) => {
  req.logOut();
  res.json({ userDoc: null });
});

// GET /checklogin
router.get("/checklogin", (req, res, next) => {
  if (req.user) {
    // hide encryptedPassword before sending the JSON (it's a security risk)
    req.user.encryptedPassword = undefined;
  }
  res.json({ userDoc: req.user });
});

module.exports = router;
