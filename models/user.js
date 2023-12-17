const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userShema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userShema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userShema);
