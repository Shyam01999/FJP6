const mongoose = require('mongoose');

//Data base connected to application
const db_link = 'mongodb+srv://admin:Brb5pFRPvbq8tTQ6@cluster0.9eberdh.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(db){
    // console.log(db)
    console.log("plan db connected");
})
.catch(function(err){
    console.log(err);
})

const planSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:[20,'plan name should not exceed 20 character']
    },
    duration:{
        type:Number,
        required:[true,'duration not entered']
    },
    price:{
        type:Number,
        required:[true,'price not entered']
    },
    ratingsAverage:{
        type:Number,
    },
    discount:{
        type:Number,
        required:[true,'discount not entered'],
        validate:[function(){
            return this.discount < this.price
        },'discount should not exceed price']
    },
    numberOfReview:{
        type:mongoose.Schema.ObjectId,
        ref:'reviewModel'

    }
})

planSchema.pre(/^Find/,function(next){
    this.populate({
        path:'numberOfReview',
        select:'rating +1'
    });
    next();
})


const planModel = mongoose.model('planModel',planSchema)
module.exports = planModel;

// (async function createPlan(){
//     let planObj = {
//         name:"SuperFood10",
//         duration:30,
//         price:1000,
//         ratingsAverage:5,
//         discount:20
//     }

//     // let data = await planModel.create(planObj)
//     // console.log(data)

//     const doc = new planModel(planObj);
//     await doc.save()
// })()