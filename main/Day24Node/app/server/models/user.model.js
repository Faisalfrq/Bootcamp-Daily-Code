const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
  })
);

module.exports = User;