const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")

router.get('/getAll', userController.getAll)
router.get('/getOneUser/:id', userController.getOne)
router.post('/addUser', userController.addOne)
router.put('/updateUser/:id', userController.updateOne)
router.delete('/deleteUser/:id', userController.deleteOne)

module.exports = router