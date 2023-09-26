const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
//Signup
module.exports.registerUser = async(req,res,next)=>{
    try{
        const {name, email, password} = req.body;
        const user = await User.create({
            name,
            email,
            password,
            avatar:{
                public_id:'this is a sample user',
                url:'profileurl'
            }
        })

        // const token = user.getJWTToken()
        // //console.log('token',token)
        // res.status(201).json({
        //     // message:'User created successfully',
        //     success:true,
        //     token,
        // });

        sendToken(user,201,"user signup successfully",res)
    }
    catch(err){
        res.json({
            message:err.message
        })
    }

}

//Login
module.exports.loginUser = async(req, res, next)=>{
    try{
        let {email, password} = req.body;

        //check that user has give the email and password
        if(!email || !password){
            return res.status(400).json({
                message:'Empty field found'
            })
        }

        const user = await User.findOne({email}).select("+password");

        if(!user){
            return res.status(401).json({
                     message:'User not found'
                     }) 
        }

        // compare the hash password
        const isPasswordMatched = await user.comparePassword(password);

        if(!isPasswordMatched){
            return next(res.status(401).json({
                message:'Invalid Crendential'
             }))
        }

        sendToken(user,200,"User loggedin successfully",res)

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//Forgot password
module.exports.forgotPassword = async(req, res, next) =>{
    try{
        const user = await User.findOne({email:req.body.email});

        if(!user){
            return res.status(404).json({
                message:'User not found'
            })
        }

        //Get Reset Password Token
        const resetPassword = user.getResetPasswordToken();

        await user.save({validateBeforeSave:false})

        const resetPasswordUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetPassword}`

        const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not request this email then, ignore it.`;

        try{
            await sendEmail({
                email:user.email,
                subject:'Ecommerce password recovery',
                message,
            });

            res.status(200).json({
                success:true,
                message:`Email sent to ${user.email} successfully `
            })
        }
        catch(err){
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save({validateBeforeSave:false});

            res.status(500).json({
                message:err.message
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//Reset password
module.exports.resetPassword = async(req,res, next) =>{
    try{
        //Generating reset password token
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

        const user = await User.findOne({resetPasswordToken,resetPasswordExpire:{$gt :Date.now()}})

        if(!user){
            return res.status(404).json({
                message:'Reset password token is expired'
            })
        }

        if(req.body.password !== req.body.confirmPassword){
            return res.status(400).json({
                message:'Password does not matched'
            })
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave:false});

        sendToken(user, 200, "Password changed successfully", res)
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//Get user details
module.exports.getUserDetails = async(req, res, next)=>{
    try{
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success:true,
            user
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//Update user Password
module.exports.updateUserPassword = async(req, res, next)=>{
    try{
        const user = await User.findById(req.user.id).select('+password');

        const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

        if(!isPasswordMatched){
            return next(res.status(401).json({
                message:'Old password is incorrect.'
             }))
        }

        if(req.body.newPassword !== req.body.confirmPassword){
            return res.status(401).json({
                message:'Password and confirmPassword must match'
            })
        }

        user.password = req.body.newPassword;

        await user.save();

        sendToken(user, 200, 'Password Changed Successfully', res)
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//Update user profile
module.exports.updateUserProfile = async(req, res, next) =>{
    try{
        const newUserData = {
            name:req.body.name,
            email:req.body.email
        }
        //we will add cloudinary later
        const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
            new:true,
            runValidators:true,
            useFindAndModify:false,
        })

        res.status(200).json({
            message:"User profile update successfully"
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//Get all users -- admin
module.exports.getAllUsers = async(req, res)=>{
    try{
        const users = await User.find();

        res.status(200).json({
            success:true,
            users
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//Get single user -- admin
module.exports.getSingleUser = async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);

        if(!user){
            res.json({
                message:`User with this id does not exit: ${req.params.id}`
            })
        }

        res.status(200).json({
            success:true,
            user
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//Update user role --admin
module.exports.updateUserRole = async (req, res, next) => {
    try {
        const newUserData = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role
        }

        const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })

        res.status(200).json({
            success: true,
            message: "User role update successfully"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
        // Don't forget to call the next function with the error
        next(err);
    }
}


//Delete user -- admin
module.exports.deleteUser= async(req, res, next) =>{
    try{
        const user = await User.findById(req.params.id);
        
        //we will remove cloudinary later
        if(!user){
            return res.status(404).json({
                message:`User does not exist with ID :${req.params.id}`
            })
        }

        await user.deleteOne();

        res.status(200).json({
            message:"User deleted successfully"
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}



//Logout
module.exports.logoutUser = async(req, res, next)=>{
    try{
        res.cookie('token',null,{
            expires:new Date(
                Date.now()
            ),
            httpOnly:true
        })

        res.status(200).json({
            success:true,
            message:'logged out'
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}