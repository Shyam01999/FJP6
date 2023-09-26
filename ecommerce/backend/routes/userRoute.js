const express = require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updateUserPassword, updateUserProfile, getAllUsers, getSingleUser, updateUserRole, deleteUser } = require('../controllers/userController');
const { isAuthenticated, authorized } = require('../middleware/auth');

const userRouter = express.Router();

userRouter.route('/signup').post(registerUser);
userRouter.route('/login').post(loginUser)
userRouter.route('/password/forgot').post(forgotPassword)
userRouter.route('/password/reset/:token').put(resetPassword)
userRouter.route('/logout').get(logoutUser)
userRouter.route('/me').get(isAuthenticated, getUserDetails)
userRouter.route('/update/password').put(isAuthenticated, updateUserPassword);
userRouter.route('/me/update').put(isAuthenticated, updateUserProfile);
userRouter.route('/admin/users').get(isAuthenticated, authorized('admin'), getAllUsers);
userRouter.route('/admin/user/:id').get(isAuthenticated, authorized('admin'), getSingleUser).put(isAuthenticated, authorized('admin'), updateUserRole).delete(isAuthenticated, authorized('admin'), deleteUser );


module.exports = userRouter;