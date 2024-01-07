const express = require("express");
const authController = require("../../controllers/auth/auth");
const validate = require("../../middleware/validate-middleware");
const {registerSchema, loginSchema} = require("../../validator/auth-validator");
const router = express.Router();

router.route('/home').get(authController.home)
router.route('/register').post(validate(registerSchema), authController.register)
router.route('/login').post(validate(loginSchema), authController.login)

module.exports = router;