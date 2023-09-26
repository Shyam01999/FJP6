const express = require('express');
const { protectRoute } = require('../controller/authController');
const { createSession } = require('../controller/bookingController');
const bookingRouter = express.Router();

bookingRouter.post('/createSession',protectRoute, createSession);
bookingRouter.get('/createSession',function(req,res){
    res.sendFile('../view/booking.html',{root:__dirname})
})

module.exports = bookingRouter;
