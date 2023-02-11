const db = require("../models")
const Feedback = db.Feedback

exports.getAllfeedback = (_, res) => {
    Feedback.find((err, Feedback) => {
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "unable to find record"
            })
        }
        return res.status(200).send({
            status: "success",
            Feedback: Feedback
        })
    })
}
exports.getFeedbackbyId = (req, res) => {
    const { id } = req.params
    Feedback.findById(id, (err, feedback) => {
        if (err) {
            return res.status(500).send({
                status: "error",
                message: "unable to find requested record"
            })
        }
        return res.send({
            status: "success",
            feedback
        })
    })
}
exports.addfeedback = async (req, res) => {
    // destructure required params from req object
    const { 
        profStatus,
        company,
        website,
        location,
        skills,
        githubUserName,
        bio,
        twitter,
        facebook,
        youtube,
        linkedIn,
        instagram
    } = req.body
    // populate instance of user model with the data 
    const feedback = new Feedback({
        profStatus,
        company,
        website,
        location,
        skills,
        githubUserName,
        bio,
        twitter,
        facebook,
        youtube,
        linkedIn,
        instagram
    })
    // save the data into the database
    feedback.save((err, newRecord) => {
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