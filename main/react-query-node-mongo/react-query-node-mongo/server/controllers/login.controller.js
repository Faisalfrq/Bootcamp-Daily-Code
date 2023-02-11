const db = require("../models")
const User = db.user
const tokenList = {}
const jwt = require('jsonwebtoken')
const config = require("../config/auth.config")
exports.login = (req, res) => {
    const { name, email } = req.body;
    const userLoginInfo = {
        email: email,
        name: name
    }
    // check duplicate username or email
    console.log('entered the login controller', name, email);
    if (!name || !email) {
        return res.send({
            status: "error",
            message: "user name or email not provided"
        })
    }
    User.findOne({ name }, (err, user) => {
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "something went wrong, please try again later"
            })
        }
        console.log('entered the find user call back', user);
        if (user) {
            console.log('user found')
            User.findOne({ email }, (err, email) => {
                console.log('entered the find email call back', email)
                if (err) {
                    return res.status(500).send({
                        status: "error",
                        message: "email not correct"
                    })
                }
                if (email) {
                    console.log('email found')
                    const token = jwt.sign(userLoginInfo, config.secret, { expiresIn: config.tokenLife })
                    const refreshToken = jwt.sign(userLoginInfo, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife })
                    const response = {
                        status: "Success logged in",
                        token: token,
                        refreshToken: refreshToken,
                    }
                    tokenList[refreshToken] = response
                    return res.status(200).send(response);
                } else {
                    console.log('email not found');
                    return res.status(500).send({
                        status: "error",
                        message: "user name or email not found"
                    })
                }
            })
        } else {
            console.log('user not found');
            return res.status(500).send({
                status: "error",
                message: "user name or email not found"
            })
        }
    })
} 