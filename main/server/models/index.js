const User= require('./user.model')
const mongoose = require('mongoose')

const db ={ }
db.mongoose = mongoose
db.user = User

module.exports = db