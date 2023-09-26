const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

module.exports.isAuthenticated = async(req,res,next)=>{
    try{
        const {token} = req.cookies;
        //console.log(token)

        if(!token){
            return res.status(401).json({
                message:'you are not login to access these resource'
            })
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decodedData.id)

        next();
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.authorized = (...role) =>{
    return (req, res, next)=>{
        if(!role.includes(req.user.role)){
           return  res.status(403).json({
                                        message:`Role ${req.user.role} is not allowed to access this resource`
                                     })
        }

        next()
    }
}