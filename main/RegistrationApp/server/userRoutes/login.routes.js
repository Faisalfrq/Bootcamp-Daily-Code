const express=require('express')
let loginControllers= require('../controllers/login.controller')
let router= express.Router()

router.post('/login',loginControllers.login)

module.exports = router