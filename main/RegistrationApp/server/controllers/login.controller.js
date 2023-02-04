let User = require('../models/userModel')
let jwt = require('jsonwebtoken')
let config = require('../config/login.config')
const { refreshTokenSecret } = require('../config/login.config')


exports.login=(req, res)=>{
    // console.log("working")
    // res.send("login route is working");
    const {name,email} = req.body
    const userLoginInfo = {name,email}
    User.findOne({name}, (err,user)=>{
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "name not found"
            })
        }
        console.log('name found')
        User.findOne({email}, (err,user)=>{
            if (email) {
                console.log('email found')
                const token = jwt.sign(userLoginInfo, config.secret, {expiresIn:config.tokenLife} )
                const refreshToken = jwt.sign(userLoginInfo,config.refreshTokenSecret)
                const response ={
                    status: "successfully logged in",
                    token: token,
                    refreshToken: refreshToken
                }
                tokenList[refreshToken] =response 
                return res.status(200).send(response);
                

                // return res.status(500).send({
                //     status: "successfully logged in",
                //     token: token,
                //     refreshToken: refreshToken
                // })
            }else{
                console.log('email not found')
                return res.status(500).send({
                    status: "error",
                    message: "email not found"
                })
            }
        })
    })

}