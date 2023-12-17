const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
  title: {
    type: String,
    // required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      " https://a0.muscache.com/im/pictures/9533b6e3-a37e-4346-98d8-baeb58fc7718.jpg?im_w=720",
    set: (v) =>
      v === ""
        ? " https://a0.muscache.com/im/pictures/9533b6e3-a37e-4346-98d8-baeb58fc7718.jpg?im_w=720"
        : v,
  },
  price: {
    type: Number,
    default: 1,
  },
  location: String,
  country: String,
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
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
