const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxllc4obSND9OR847HhKGcaEmfN-NZpjASV5WKReOH&s",
    set: (v) =>
      v === ""
        ? " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxllc4obSND9OR847HhKGcaEmfN-NZpjASV5WKReOH&s"
        : v,
  },
  price: {
    type: Number,
    default: 1,
  },
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
