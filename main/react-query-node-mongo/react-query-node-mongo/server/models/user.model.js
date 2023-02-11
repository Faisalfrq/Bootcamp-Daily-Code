const mongoose = require("mongoose")

// create schema to describe fields
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
// instantiates model
const User = mongoose.model('User', UserSchema)

module.exports = User