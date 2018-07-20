const passport = require("passport");

const User = require("../models/user-model.js");

// serialize: saving user data in the session
passport.serializeUser((userDoc, done) => {
  // save the user's ID inside the session
  done(null, userDoc._id);
});

// deserialize: retrieving all the user details from the database
passport.deserializeUser((idFromSession, done) => {
  User.findById(idFromSession)
    .then(userDoc => {
      done(null, userDoc);
    })
    .catch(err => {
      done(err);
    });
});

function passportSetup(app) {
  // add Pasport features to our routes
  app.use(passport.initialize());
  app.use(passport.session());
}

module.exports = passportSetup;
