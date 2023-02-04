const express=require('express')
const { JsonWebTokenError } = require('jsonwebtoken')
let userControllers= require('../controllers/userControllers')
let router= express.Router()


router.use((req,res,next)=>{    //another way of using middle-ware

})

//router.get('/getdata', userControllers.getAll)
//------------using middle-ware--------------------------------
//can add N number of middlewares.
const jwt = require('jsonwebtoken')
const config = require('../config/login.config')


router.get('/getdata',
    (res,req, next)=>{
        const {authorization}= req.headers
        console.log('what are the headers ', req.headers)
        const token= authorization.split(' ') //splits "bearer token-string"
        const result = jwt.verify(authorization, config.secret)
        console.log(result)
        //Authorization: "Bearer tokenString..."
       // x-Access-Header: "tokenString..." //another way of sending token

    next()
    },
    userControllers.getAll
    )

router.post('/register',userControllers.addUser)

router.delete('/deleteuser/:id',userControllers.deleteUser)

router.put('/updateUser/:id',userControllers.updateUser)

module.exports = router