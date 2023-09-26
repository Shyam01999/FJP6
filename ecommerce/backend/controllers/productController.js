const Product = require('../models/productModel');
const ApiFeatures = require('../utils/apifeatures');
// const ErrorHandler = require('../utils/errorhandler');

//Create Product
module.exports.createProduct = async (req, res, next)=>{
    try{
        req.body.user = req.user.id
        const product = await Product.create(req.body);

        res.status(201).json({
            message:'Product created',
            success:true,
            product
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
    
}

//Get All Product
module.exports.getAllProducts = async(req,res)=>{
    try{
        const resultPerPage = 5;
        const productPerPage = await Product.countDocuments();
        const apiFeature = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage);
        const products = await apiFeature.query
        res.status(200).json({
            success:true,
            products,
            productPerPage
        })
    }
    catch(err){
        res.json({
            message:err.message

        })
    }
    
}

//Get Product
module.exports.getProduct = async(req,res,next)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                success:false,
                message:'Product not found'
            })
        }

        res.status(200).json({
            success:true,
            product
        })
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
    
}

//Update Product
module.exports.updateProduct = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                message:"Product not found",
                success:false
            }) 
        }

        product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators:true,
            userFindAndModify:false
        })

        
        res.status(200).json({    
            message:'product updated successfully',
            success:true,
            product
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
    
}

//Delete Product
module.exports.deleteProduct = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                message:'Product not found'
            })
        }
        product = await Product.findByIdAndDelete(req.params.id)

        res.status(200).json({
            success:true,
            message:'product deleted successfully',
            product
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    } 
}

//Create New Review and Update review
module.exports.createProductReview = async(req, res, next)=>{
    try{
        const {rating, comment, productId} = req.body;

        const review = {
            user:req.user._id,
            name:req.user.name,
            rating:Number(rating),
            comment,
        }

        const product = await Product.findById(productId);
        
        const isReviewed = product.reviews.find((rev)=>{ rev.user.toString() === req.user._id.toString()})

        if(isReviewed){
            product.reviews.forEach((rev)=>{
                if(rev.user.toString() === req.user._id.toString()){
                    (rev.rating = rating),(rev.comment = comment);
                }
            });
        }else{
            product.reviews.push(review)
            product.numOfReviews = product.reviews.length
        }

        let avg = 0;
        
        product.reviews.forEach(rev =>{
                avg += rev.rating;
        });

        product.ratings  = avg / product.reviews.length;

        await product.save({validateBeforeSave:false});
        
        res.status(200).json({
            success:true,
            message:"Rating added"
        })
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}

//Get All Review of a product
module.exports.getProductReviews = async(req, res, next)=>{
    try{
        const product = await Product.findById(req.params.productId);

        if(!product){
            return res.json({
                success:false,
                message:`Product does not exist with this id ${req.params.productId}`,
            })
        }

        res.status(200).json({
            success:true
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}

//DeleteReview
module.exports.deleteReview = async(req, res, next)=>{
    try{
        const product = await Product.findById(req.params.productId);

        if(!product){
            return res.json({
                success:false,
                message:`Product does not exist with this id ${req.params.productId}`,
            })
        }

        const reviews = product.reviews.filter((rev) =>{ rev._id.toString() !== req.params.productId})

        let avg = 0;
        
        reviews.forEach(rev =>{
                avg += rev.rating;
        });

        const ratings  = avg / reviews.length;

        const numOfReviews = reviews.length;

        await Product.findByIdAndUpdate(req.params.productId,{
            review,
            ratings,
            numOfReviews
        },
        {
            new:true,
            runValidators:true,
            userFindAndModify:false,
        })


        res.status(200).json({
            success:true,
            reviews:product.reviews
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}