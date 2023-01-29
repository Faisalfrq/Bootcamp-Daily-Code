const express=require('express')
const router = express.Router();
const userController= require('../controllers/user.controllers')


router.get('/', userController.getAll)
router.get('/getUserById:id',userController.getOne)
router.post('/addUser',userController.addUser)
router.put('/editUser/:id', userController.updateUser)
router.delete('/deleteUser/:id',userController.deleteUser)
module.exports =router