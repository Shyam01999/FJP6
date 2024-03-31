const db = require("../../models/index");
const Product = db.Product;

//create product
const createProduct = async (req, res) => {
    try {
        let {name, description, price, rating, image, category, stock, numOfReviews, reviews} = req.body;
        const newProduct = await Product.create({name, description, price, rating, image, category, stock, numOfReviews, reviews});
        if(newProduct){
            res.status(201).json({message:"Product added Successfully"})
        }
        else {
            res.status(500).json({message:"Product not added"})
        }
    }
    catch (error) {
        console.log('Error in creating product:', error);
        res.status(500).json({error : "Internal Server Error"})
    }
}

//getallproduct
const getAllProduct = async (req, res) => {
    try {
        const allproducts = await Product.findAll();
        if(allproducts.length > 0){
            res.status(200).json({message:"All products", data:allproducts})
        }
        else {
            res.status(404).json({message:"No product Found", data:[]})
        }
    }
    catch (error) {
        console.log('Error in fetching product data:', error);
        res.status(500).json({error : "Internal Server Error"})
    }
}

module.exports = {
    getAllProduct,
    createProduct
}