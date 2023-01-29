const mongoose = require('mongoose')
var Schema = mongoose.Schema
//create schema
const UserSchema= new Schema({
    name: String,
    email: String,
    age: Number
})
//instantiates model
const User = new mongoose.model('User', UserSchema)
module.export= User