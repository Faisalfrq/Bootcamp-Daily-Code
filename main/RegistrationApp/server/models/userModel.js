let mongoose = require('mongoose')

let userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
})

let User=mongoose.model('users', userSchema)

module.exports= User