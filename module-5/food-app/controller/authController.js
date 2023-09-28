const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_KEY = require('../secrets');
const { sendMail } = require('../utility/nodemailer');
const userModel = require('../models/userModel');

module.exports.signup = async function signup(req,res){
    try{
        let dataToBeCreateObj = req.body;
        //console.log('backend',dataToBeCreateObj);
        let user = await userModel.create(dataToBeCreateObj)
        sendMail('signup',user)
        //console.log("user",user)
        if(user){
            return res.json({
                message:"user signed up",
                data:user
            })
        }
        else{
            res.json({
                message:"error while signup",
            })
        }
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}

module.exports.login = async function login(req,res){
    try{
        let data = req.body
        if(data.email && data.password){
            let user= await userModel.findOne({email:data.email});
            if(user){
                //bcrypt => compare
                if(user.password == data.password){
                    let uid = user['_id']; //uid
                    let token = jwt.sign({payload:uid},JWT_KEY)
                    res.cookie('login',token,{httpOnly:true})
                    res.json({
                        message:"User has logged in",
                        userDetails:user
                    })
                }
                else{
                    res.json({
                        message:"wrong credential"
                    })
                }
            }
            else{
                res.json({
                    message:"User not found"
                })
            }

        }else{
            res.json({
                message:"Empty field found"
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.logout = function logout(req,res){
    res.cookie('login',' ',{maxAge:1})
    if(res.cookie == null){
        res.redirect('/login')
    }
    res.json({
        message:"user logged out successfully"
    })
}
//isAuthorised =>to check the user's role [admin,user,restruantowner,deliveryboy]

module.exports.isAuthorised = function isAuthorised(roles){
    try{
        return function(req,res,next){
            if(roles.includes(req.role)==true){
                next();
            }
            else{
                res.status(401).json({
                    message:"operation not allowed"
                })
            }
        }
    }
    catch(err){
        res.json({
            message:err.message
        })
    }

}

//protectRoute

module.exports.protectRoute = async function protectRoute(req,res,next){
    try{
    let token;
    if(req.cookies.login){
        token = req.cookies.login
        console.log(token);
        let payload = jwt.verify(token,JWT_KEY);
        if(payload){
            const user = await userModel.findById(payload.payload)
            req.role = user.role
            req.id = user.id  
            // console.log("role->",req.role,"id->",req.id)
            next()
        }
        else{
            res.json({
                message:"user not verified"
            })
        }
    }
    else{
            //browser
            const client = req.get('User-Agent');
            if(client.includes('Mozilla')==true){
                return res.redirect('/login')
            }
            else{
            //postman
            res.json({
                message:"please login "
            })
            }

         
    }
}
catch(err){
    res.status(500).json({
        message:err.message
    })
}
}

module.exports.forgetpassword = async function forgetpassword(req,res){
    try{
    let {email} = req.body;
    let user = await userModel.findOne({email:email})
    if(user){
        //createResetToken is used to create new token
        const resetToken = user.createResetToken();
        //http://localhost:3000/user/resetpassword/resetToken
        let resetpasswordLink = `${req.protocol}://${req.get('host')}/user/resetpassword/${resetToken}`;
        //send email to the user
        //nodemailer
        let obj={
            resetpasswordLink:resetpasswordLink,
            email:email
        }
        sendMail('resetpassword',obj)
    }
    else{
        res.json({
            message:'please signup'
        })
    }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.resetpassword = async function resetpassword(req,res){
    try{
        let token = req.params.token
        let {password,confirmPassword} = req.body
        let user = await userModel.findOne({resetToken:token})
        if(user){
            //resetPasswordHandle will update user's password in db
            user.resetPasswordHandler(password,confirmPassword)
            await user.save();
            res.json({
                message:'Password changed successfully, please login again'
            })

        }
        else{
            res.json({
                message:"user not found"
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}