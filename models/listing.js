const mongoose = require("mongoose");
const Schema = mongoose.Schema;
<<<<<<< HEAD
const Review = require("./review.js");
const listingSchema = new Schema({
  title: {
    type: String,
    // required: true,
=======

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
>>>>>>> 1ae7dddb2a5893250224d193d0a0bdee8f6ad87b
  },
  description: String,
  image: {
    type: String,
    default:
<<<<<<< HEAD
      " https://a0.muscache.com/im/pictures/9533b6e3-a37e-4346-98d8-baeb58fc7718.jpg?im_w=720",
    set: (v) =>
      v === ""
        ? " https://a0.muscache.com/im/pictures/9533b6e3-a37e-4346-98d8-baeb58fc7718.jpg?im_w=720"
=======
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxllc4obSND9OR847HhKGcaEmfN-NZpjASV5WKReOH&s",
    set: (v) =>
      v === ""
        ? " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxllc4obSND9OR847HhKGcaEmfN-NZpjASV5WKReOH&s"
>>>>>>> 1ae7dddb2a5893250224d193d0a0bdee8f6ad87b
        : v,
  },
  price: {
    type: Number,
    default: 1,
  },
  location: String,
  country: String,
<<<<<<< HEAD
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
=======
>>>>>>> 1ae7dddb2a5893250224d193d0a0bdee8f6ad87b
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
