const express = require('express');
const multer = require('multer');
const path = require('path')
// const protectRoute = require('./authHelper');
const {getUser, getAllUser, updateUser, deleteUser, updateProfileImage } = require('../controller/userController');
const {signup, login, isAuthorised, protectRoute, logout, forgetpassword, resetpassword} = require('../controller/authController')

const userRouter = express.Router();

//User ke option
// userRouter.route('/:id')
// .patch(updateUser)
// .delete(deleteUser)

userRouter
.route('/signup')
.post(signup)

userRouter
.route('/login')
.post(login)

// userRouter
// .route('/logout')
// .get(logout)

// userRouter
// .route('/forgetpassword')
// .post(forgetpassword)

// userRouter
// .route('/resetpassword/:token')
// .post(resetpassword)

// //multer for fileupload

// //upload->storage,filter
// const multerStorage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'public/images')
//     },
//     filename:function(req,file,cb){
//         cb(null,`user-${Date.now()}.jpeg`)
//     }
// });

// const filter = function(req,file,cb){
//     if(file.mimetype.startsWith('image')){
//         cb(null,true)
//     }else{
//         cb(new Error('Not an image! Please upload an image'), false)
//     }
// }

// const upload = multer({
//     storage: multerStorage,
//     fileFilter:filter
// })

// userRouter.post('/ProfileImage', upload.single('photo'),updateProfileImage)
// //get ka request
// userRouter.get('/ProfileImage',(req,res)=>{
//     res.sendFile('multer.html',{root:__dirname})
// })

// //Profile page
// userRouter.use(protectRoute);
// userRouter
// .route('/userProfile')
// .get(getUser)

// //admin specfic func
// userRouter.use(isAuthorised(['admin']));
// userRouter
// .route('')
// .get(getAllUser)

module.exports = userRouter
