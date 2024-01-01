const express = require("express");
const authController = require("../../controllers/auth/auth");
const router = express.Router();

router.route('/home').get(authController.home)
router.route('/register').post(authController.register)

module.exports = router