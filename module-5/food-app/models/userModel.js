const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt'); //hashing passing
const crypto = require('crypto');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter your name']
    },
    email:{
        type:String,
        required:[true,'please enter email'],
        unique:true,
        // validate:[function(){
        //     return emailValidator.validate(this.email)
        // },'user with this mail already exist']
    },
    password:{
        type:String,
        required:[true,'please enter password'],
        minLength:[6,'please enter password more than 6 character'],
    },
    confirmPassword:{
        type:String,
        required:[true,'please enter confirm password'],
        minLength:[6,'please enter confirm password more than 6 character'],
        // validate:[function(){
        //     return this.confirmPassword == this.password;
        // },'password and confirmpassword must match']
    },
    role:{
        type:String,
        enum:['admin','user','resturantowner','deliveryBoy'],
        default:'user'
    },
    profileImg:{
        type:String,
        default:'img/users/default.jpeg'
    },
    resetToken:String
});
 
//Pre post hooks in mongoose
//after save event occurs
// userSchema.post('save',function(doc){
//     console.log("after saving in database",doc)
// })

//pre
//before save event occurs
// userSchema.pre('save',function(){
//     console.log("before saving in database",this)
// })

//remove -> explore it own

// userSchema.pre('save',function(){
//      this.confirmPassword = undefined;
// })

// userSchema.pre('save',async function(){
//     let salt = await bcrypt.genSalt();
//     let hashedString = await bcrypt.hash(this.password,salt);
//     this.password = hashedString
// })

// userSchema.methods.createResetToken= function(){
//     //creating unique token using npm i crypto
//     const resetToken =crypto.randomBytes(32).toString('hex');
//     this.resetToken = resetToken
//     return resetToken;
// }

// userSchema.methods.resetPasswordHandler = function(password,confirmPassword){
//     this.password = password;
//     this.confirmPassword = confirmPassword;
//     this.resetToken = undefined
// }

//Model
const userModel = mongoose.model('userModel',userSchema);
module.exports = userModel;

// (async function createUser(){
//     let user={
//         name:"Rakesh kumar Sahoo",
//         email:"rakesh@gmail.com",
//         password:"123456",
//         confirmPassword:"123456"
//     }

//     const data = await userModel.create(user);
//     console.log(data)
// })()
