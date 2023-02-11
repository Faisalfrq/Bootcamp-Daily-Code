const mongoose = require("mongoose")

// create schema to describe fields
const feedbackSchema = new mongoose.Schema({
    profStatus: String,
    company: String,
    website: String,
    location: String,
    skills: String,
    githubUserName: String,
    bio: String,
    twitter: String,
    facebook: String,
    youtube: String,
    linkedIn: String,
    instagram: String
})
// instantiates model
const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback