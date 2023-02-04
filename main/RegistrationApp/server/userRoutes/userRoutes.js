const express=require('express')
let userControllers= require('../controllers/userControllers')
let router= express.Router()

router.get('/getdata', userControllers.getAll)

router.post('/register',userControllers.addUser)

module.exports = router