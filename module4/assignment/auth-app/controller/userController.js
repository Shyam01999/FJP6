const userModel = require('../models/userModel');

module.exports.getUser = async function getUser(req,res){
    // console.log(req.query)
    try{
        let id = req.id
        let user = await userModel.findById(id);
        if(user){
            res.json({
                message:"user has exist",
                data:user
            })
        }
        else{
            res.json({
                message:"User not found",
            })
        }
        
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}

// module.exports.postUser = function postUser(req,res){
//     console.log(req.body);
//     users.push(req.body);
//     res.json({
//         message:"Data received Successfully",
//         user:req.body
//     })
// }

// module.exports.updateUser = async function updateUser(req,res){
//     try{
//     let id = req.params.id
//     let dataToBeUpdatedObj = req.body
//     let user = userModel.findById(id)
//     if(user){
//         const keys =[];
//         for(let key in dataToBeUpdatedObj){
//             keys.push(key)
//         }

//         for(let i=0; i<keys.length; i++){
//             user[keys[i]] = dataToBeUpdatedObj[keys[i]]

//         }
//         // const updatedData = await userModel.update(user);
//         const updateData = await userModel.findOneAndUpdate({email:user.email},user)
//         res.json({
//             message:"data updated successfully",
//             data:user   
//         })
//     }
//     else{
//         res.json({
//             message:"user not found"
//         });
//     }
//     }
//     catch(err){
//         res.json({
//             message:err.message
//         })
//     }
    
// }

// module.exports.deleteUser = async function deleteUser(req,res){
//     try{
//         let id = req.params.id
//         let user = await userModel.findByIdAndDelete(id)
//         if(user){
//             res.json({
//                 message:"data has been deleted",
//                 data:user
//             })
//         }else{
//             res.json({
//                 message:"user not found"
//             })
//         }
//     }
//     catch(err){
//         res.json({
//             message:err.message
//         })
//     }
// }

// module.exports.getAllUser = async function getAllUser(req,res){
//     try{
//         let users = await userModel.find();
//         if(users){
//             res.json({
//                 message:"users retrived",
//                 data:users
//             })
//         }
//         else{
//             res.json({
//                 message:"users not found",
                
//             })
//         }
//     }
//     catch(err){
//         res.json({
//             message:err.message
//         })
//     }
    
// }

// // function setCookies(req,res){
// //     // res.setHeader('Set-Cookie','isLoggedIn=true');
// //     res.cookie('isLoggedIn',true,{maxAge:1000*60*60*24, secure:true, httpOnly:true})
// //     res.cookie('isPrimeMember',true)
// //     res.send('cookies has been set')
// // }

// // function getCookies(req,res){
// //     let cookies = req.cookies.isLoggedIn
// //     console.log(cookies);
// //     res.send('cookies received')
// // }