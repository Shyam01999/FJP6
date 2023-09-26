const mongoose = require('mongoose');
const emailValidator = require('email-validator');
//const bcrypt = require('bcrypt'); //hashing passing

//Data base connected to application
const db_link = 'mongodb+srv://admin:xmOVxgr6nw5V9XVU@cluster0.vrrst7p.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db_link)
.then(function(db){
    // console.log(db)
    console.log("db connected");
})
.catch(function(err){
    console.log(err);
})

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[function(){
            return emailValidator.validate(this.email)
        },'user with this email already exist']
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minLength:10,
        validate: {
            validator: function(v) {
              return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid mobile number!`
          }
    },
    password:{
        type:String,
        required:true,
        minLength:[6,'password should be atleast 6 character']
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    profileImg:{
        type:String,
        default:'img/users/default.jpeg'
    }
});

//Model
const userModel = mongoose.model('userModel',userSchema);
module.exports = userModel;
