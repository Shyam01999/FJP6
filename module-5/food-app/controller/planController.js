const planModel = require('../models/planModel');

module.exports.getAllPlans = async function getAllPlans(req,res){
    try{
        let plan = await planModel.find()
        if(plan){
            res.json({
                message:"plans retrived",
                data:plan
            })
        }
        else{
            res.json({
                message:"no plans found"
            })
        }

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.getPlan = async function getPlan(req,res){
    try{
        let id = req.params.id;
        if(id){
            let plan = await planModel.findById(id)
            if(plan){
                res.json({
                    message:"plan retrived",
                    data:plan
                })
            }
            else{
                res.json({
                    message:"no plan found"
                })
            }
        }
        else{
            res.json({
                message:"plan not found"
            })
        }
        
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.createPlan = async function createPlan(req,res){
    try{
        let planData = req.body;
        if(planData){
            let plan = await planModel.create(planData)
            if(plan){
                res.json({
                    message:"plan created successfully",
                    data:plan
                })
            }
            else{
                res.json({
                    message:"plan not created"
                })
            }
        }
        else{
            res.json({
                message:"please give plan data to create"
            })
        }
        
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.updatePlan = async function updatePlan(req,res){
    try{ 
        let id = req.params.id;
        if(id){
            let planDataToUpdate = req.body;
        if(planDataToUpdate){
            let plan = await planModel.findById(id);
            // console.log(plan)
            if(plan){
                let keys = []
                for(key in planDataToUpdate){
                    keys.push(key)
                }

                for(let i=0; i<keys.length; i++){
                    plan[keys[i]] = planDataToUpdate[keys[i]]
                }

                await plan.save()
                res.json({
                    message:"plan updated successfully"
                })
            }
            else{
                res.json({
                    message:"plan not found"
                })
            }
        }
        else{
            res.json({
                message:"please give plan data to update"
            })
        } 
        }else{
            res.json({
                message:"plan not updated"
            })
        }
        
        
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.deletePlan = async function deletePlan(req,res){
    try{
        let id = req.params.id;
        if(id){
            let planDeleted = await planModel.findByIdAndDelete(id)
            if(planDeleted){
                res.json({
                    message:"plan deleted successfully",
                    data:planDeleted
                })
            }
            else{
                res.json({
                    message:"plan not deleted"
                })
            }
        }
        else{
            res.json({
                message:"plan not deleted"
            })
        }
        
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//top3plans
module.exports.topThreePlans = async function topThreePlans(req,res){
    try{
        const plans = await planModel.find().sort({ratingsAverage:-1}).limit(3);
        res.json({
            message:"top3 plans",
            data:plans
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}



