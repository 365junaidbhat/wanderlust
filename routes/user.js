const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const usercontroller = require("../controllers/users.js");

//render signup form
router.get("/signup", usercontroller.renderSignupForm);

//signUp route
router.post("/signup", wrapAsync(usercontroller.signUp));

//render login form
router.get("/login", usercontroller.renderLoginForm);

//login
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  usercontroller.login
);

//logout
router.get("/logout", usercontroller.logout);

module.exports = router;
