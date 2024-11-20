const express=require('express')
const { registerUser, loginUser } = require('../Controllers/userCtrl')


const signupRouter=express.Router()
//Route for user registration
signupRouter.post('/',registerUser)
signupRouter.post('/login',loginUser)

module.exports=signupRouter;