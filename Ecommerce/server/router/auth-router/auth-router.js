const express = require("express");
const authController = require("../../controllers/auth/auth");
const validate = require("../../middleware/validate-middleware");
const {registerSchema, loginSchema} = require("../../validator/auth-validator");
const authRouter = express.Router();

// authRouter.route('/home').get(authController.home)
authRouter.route('/register').post(validate(registerSchema), authController.register); 
authRouter.route('/login').post(validate(loginSchema), authController.login);
authRouter.route('/allusers').get(authController.getAllUsers);
authRouter.route('/update/user').post(authController.updateUser);
authRouter.route('/delete/user').post(authController.deleteUser);

module.exports = authRouter;