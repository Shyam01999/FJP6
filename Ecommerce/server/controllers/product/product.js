const db = require("../../models/index");
const Product = db.Product;

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
    getAllProduct
}