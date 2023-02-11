// const config = require("../config/auth.config")
// const jwt = require("jsonwebtoken")
    // (req, res, next) => {
    //     const { authorization } = req.headers
    //     console.log('what are the headers', authorization)
    //     const result = jwt.verify(authorization.split(" ")[1], config.secret)
    //     console.log("how dide it go", result)
    //     if (result.name === req.body.name && result.email === req.body.email) {
    //         next()
    //     } else {
    //         res.status(401).send("who are you")
    //     }
    // },