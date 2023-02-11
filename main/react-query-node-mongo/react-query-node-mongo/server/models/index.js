const mongoose = require("mongoose")
const User = require("./user.model")
const Feedback = require("./feedback.model")

const db = {}
db.mongoose = mongoose
db.user = User
db.Feedback = Feedback

module.exports = db
