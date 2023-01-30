const db = require('../models/index') //MVC
const User = db.user
// const user= new User()

exports.getAll=(req,res)=>{
    User.find((err,users)=>{
        if (err) {
            return res.status(500).send({status: 'error',message: "Unable to find record"})
        }
        return res.status(200).send({
            status:'Sucess',
            data: users
        })
    })
    //res.send('all routes are working')
}
exports.getOne=(req,res)=>{
    console.log(req.query)
    res.send('get user by id route is working')
}
exports.addUser=(req,res)=>{
    //destructing require param from req body
    const {name,email,age}= req.body
    //console.log("=============")
    const user = new User({
        name,
        email,
        age
    })
    console.log("at user ")
    user.save()
    res.send('AddUser is working')
}
exports.updateUser=(req,res)=>{
    console.log(req.params.id)
    res.send('Update is working')
}
exports.deleteUser=(req,res)=>{
    res.send('AddUser is working')
}