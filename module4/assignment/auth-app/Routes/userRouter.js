const express = require('express');
const {signup, login, isAuthorised, protectRoute, logout} = require('../controller/authController')
const {getUser} = require('../controller/userController')

const userRouter = express.Router();

const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,'public/images')
    },
    filename:function(req, file, cb){
        cb(null, `user-${Date.now()}.jpeg`)
    }
})

const filter = function(req, file, cb){
    if(file.mimetype.startsWith("image")){
        cb(null, true)
    } else{
        cb(new Error('Not an image! Please upload an image'), false)
    }
}

const upload = multer({ 
    dest: 'uploads/',
    storage: multerStorage, 
    fileFilter: filter
})

userRouter
.route('/signup')
.post(upload.single('profileImg'), signup)

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
