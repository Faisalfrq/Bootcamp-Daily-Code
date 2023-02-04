let User = require('../models/userModel')
let bcrypt = require('bcryptjs')//to encrypt password

exports.getAll = (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(500).send({
                status: "Error 404 not Found",
                message: "Unable to get all Data",
            });
        } else {
            return res.status(200).send({
                status: "Success",
                data: users,
            });
        }
    });
    // res.send("express route is working");
};

exports.deleteUser = (req, res) => {
    const { id } = req.params
    console.log(id)
    User.findByIdAndDelete(id, (err, record) => {
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "unable to remove requested record"
            })
        }
        return res.send({
            status: "success, deleted record was",
            data: record
        })
    })

}
exports.updateUser=(req, res)=>{
    const { id } = req.params
    //console.log(req.body)
    const {body}=req
    User.findByIdAndUpdate(id, {...req.body}, (err, record) => {  // body or {...body}
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "unable to update requested record"
            })
        }
        return res.send({
            status: "update record was successful",
            data: record,
        })
    })


}

exports.addUser = async (req, res) => {
    //res.send('express post route is working')
    //we get all data in request.body when user submits 

    //console.log(req.body)
    //res.send(req.body)

    let { name, email, password, phone } = req.body
    if (name && email && password && phone) {
        // console.log('error:')
        let user = await User.findOne({ email: email })
        if (user) {
            res.send('user already exist')
        } else {
            try {
                user = new User({ name, email, password, phone })

                let salt = await bcrypt.genSalt(10) //salt is a pattern
                user.password = await bcrypt.hash(password, salt) //changes password to encrypted hash of 10 digits

                await user.save()
                res.send('User Registered Successfully')
            } catch (error) {
                console.log('error at registring')
            }
        }
    }
    else {
        res.send('please fillout all fields')
    }
}
