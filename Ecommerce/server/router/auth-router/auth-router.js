const express = require("express");
const authController = require("../../controllers/auth/auth");
const validate = require("../../middleware/validate-middleware");
const {registerSchema, loginSchema} = require("../../validator/auth-validator");
const authRouter = express.Router();

// authRouter.route('/home').get(authController.home)
// authRouter.route('/register').post(validate(registerSchema), authController.register) 
// authRouter.route('/login').post(validate(loginSchema), authController.login)
authRouter.route('/createUser').post(authController.createUser)

module.exports = authRouter;