const reviewModel = require('../models/reviewModel');
const planModel = require('../models/planModel');

module.exports.getAllReviews = async function getAllReviews(req,res){
    try{
        const reviews = await reviewModel.find();
        if(reviews){
            return res.json({
                message:'reviews retrived',
                data:reviews
            })
        }
        else{
            return res.json({
                message:'reviews not found'
            })
        }
    }
    catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}

module.exports.top3Reviews =async function top3Reviews(req,res){
    try{
        const topreviews = await reviewModel.find().sort({rating:-1}).limit(3)
        if(topreviews){
            return res.json({
                message:'top 3 reviews',
                data:topreviews
            })
        }
        else{
            return res.json({
                message:'reviews not found'
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.getPlanReviews =async function getPlanReviews(req,res){
    try{
        let planid = req.params.id;
        const reviews = await reviewModel.find()
        reviews = reviews.filter(review => review.plan._id == planid)
        if(reviews){
            res.json({
                message:'review retrived',
                data:reviews
            })
        }
        else{
            res.json({
                message:'review not found'
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }    
}

module.exports.createReview =async function createReview(req,res){
    try{
        let id = req.params.plan;
        let reviewObj = req.body;
        let plan = await planModel.findById(id)
        let review = await reviewModel.create(reviewObj);
        // plan.ratingsAverage = (plan.ratingsAverage + req.body.rating/2)
        await plan.save()
        if(review){
            res.json({
                message:'review created',
                data:review
            })
        }
        else{
            res.json({
                message:'review not created'
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }    
}

module.exports.updateReview =async function updateReview(req,res){
    try{
        let planid = req.params.id;
        //review id from frontend
        let id = req.body.id;
        let updateReview = req.body;
        const review = await reviewModel.findById(id)
        if(review){
            const keys =[];
            for(let key in updateReview){
                if(key ==' id') continue;
                keys.push(key)
            }

            for(let i=0; i<keys.length; i++){
                review[keys[i]] = updateReview[keys[i]]
            }

            await review.save();
            return res.json({
                message:'review updated successfully',
                data:review
            })

        }
        else{
           return res.json({
                message:'review not exist'
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }    
}

module.exports.deleteReview =async function deleteReview(req,res){
    try{
        // let planid = req.params.id;
        //review id from frontend
        let id = req.body.id;
        const review = await reviewModel.findByIdAndDelete(id);
        if(review){
            res.json({
                message:'review deleted successfully',
                data:review
            })
        }
        else{
            res.json({
                message:'review not found',
            }) 
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }    
}