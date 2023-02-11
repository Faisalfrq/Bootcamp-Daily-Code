const express = require("express")
const router = express.Router()
const feedbackController = require("../controllers/feedback.controller")

router.get('/getAllfeedback', feedbackController.getAllfeedback)
router.get('/getOneFeedback/:id', feedbackController.getFeedbackbyId)
router.post('/addfeedback', feedbackController.addfeedback)

module.exports = router