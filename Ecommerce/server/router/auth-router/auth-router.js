const express = require("express");
const authController = require("../../controllers/auth/auth");
const validate = require("../../middleware/validate-middleware");
const {registerSchema, loginSchema} = require("../../validator/auth-validator");
const isAuthenticated = require("../../middleware/authenticated");
const authRouter = express.Router();

authRouter.route('/register').post(validate(registerSchema), authController.register); 
authRouter.route('/login').post(validate(loginSchema), authController.login);
authRouter.route('/logout').get(authController.logout);
authRouter.route('/allusers').get(isAuthenticated, authController.getAllUsers);
authRouter.route('/update/user').post(isAuthenticated, authController.updateUser);
authRouter.route('/delete/user').post(isAuthenticated, authController.deleteUser);

module.exports = authRouter;