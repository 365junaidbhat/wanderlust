const express = require("express");
const app = express();
const mongoose = require("mongoose");
<<<<<<< HEAD
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
=======
const ejs = require("ejs");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
>>>>>>> 1ae7dddb2a5893250224d193d0a0bdee8f6ad87b

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connection is succesful");
  })
  .catch((err) => {
    console.error(`Error connecting to database ${MONGO_URL}`);
  });
<<<<<<< HEAD
=======

>>>>>>> 1ae7dddb2a5893250224d193d0a0bdee8f6ad87b
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
<<<<<<< HEAD

app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOption = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

=======
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

>>>>>>> 1ae7dddb2a5893250224d193d0a0bdee8f6ad87b
app.get("/", (req, res) => {
  res.send("Hi i am root");
});

<<<<<<< HEAD
app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//flash Cookie
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

// // ExpressError for all
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// //Middle Ware error handling
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Some thing went Wrong" } = err;
  res.status(statusCode).render("listings/error.ejs", { message });
});

=======
//Index Rout
app.get("/listings", async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
});

//new rout
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Rout
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

//Create Route
app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

//Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

//Update Rodte
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

//delte Route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the Beach",
//     price: 1200,
//     location: "calangute, Goa",
//     contry: "India",
//   });

//   await sampleListing.save();
//   console.log("Sample data was Saved");
//   res.send("Succesful Testing");
// });

>>>>>>> 1ae7dddb2a5893250224d193d0a0bdee8f6ad87b
app.listen(8080, () => {
  console.log("Sever is lesting is on the port 8080");
});
