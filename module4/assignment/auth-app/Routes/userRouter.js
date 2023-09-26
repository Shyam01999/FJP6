const express = require('express');
const {signup, login, isAuthorised, protectRoute, logout} = require('../controller/authController')
const {getUser} = require('../controller/userController')

const userRouter = express.Router();

userRouter
.route('/signup')
.post(signup)

userRouter
.route('/login')
.post(login)

userRouter
.route('/logout')
.get(logout)

//Profile page
userRouter.use(protectRoute);
userRouter
.route('/userProfile')
.get(getUser)

//admin specfic func
// userRouter.use(isAuthorised(['admin']));
// userRouter
// .route('')
// .get(getAllUser)

module.exports = userRouter
