const express = require("express");
const authController = require("../../controllers/auth/auth");
const router = express.Router();

router.route('/home').get(authController.home)
router.route('/register').post(authController.register)
router.route('/login').post(authController.login)

module.exports = router