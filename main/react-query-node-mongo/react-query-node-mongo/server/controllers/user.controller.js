const db = require("../models")
const User = db.user

exports.getAll = (_, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "unable to find record"
            })
        }

        return res.status(200).send({
            status: "success",
            users: users
        })
    })
}
exports.getOne = (req, res) => {
    const { id } = req.params
    User.findById(id, (err, user) => {
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "unable to find requested record"
            })
        }
        return res.send({
            status: "success",
            user
        })
    })
}
exports.addOne = async (req, res) => {
    // destructure required params from req object
    const { name, email, age } = req.body
    // populate instance of user model with the data 
    const user = new User({
        name,
        email,
        age
    })
    // save the data into the database
    user.save((err, newRecord) => {
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "unable to create new record"
            })
        }
        return res.send({
            status: "success",
            data: newRecord
        })
    })
}
exports.updateOne = (req, res) => {
    const { id } = req.params
    const { body } = req
    console.log(id, body)
    User.findOneAndUpdate({ _id: id }, body, (err, record) => {
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "unable to update requested record"
            })
        }
        return res.send({
            status: "success, updated record was",
            data: record
        })
    })
}
exports.deleteOne = (req, res) => {
    const { id } = req.params
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