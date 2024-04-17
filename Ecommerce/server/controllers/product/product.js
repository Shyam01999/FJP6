const db = require("../../models/index");
const ApiFeatures = require("../../utils/apifeatures");
const Product = db.Product;

//create product -- Admin
const createProduct = async (req, res) => {
    try {
        req.body.user = req.user.id;
        let { name, description, price, ratings, image, category, stock, numOfReviews, reviews, user} = req.body;
        const newProduct = await Product.create({ name, description, price, ratings, image, category, stock, numOfReviews, reviews, user });
        if (newProduct) {
            res.status(201).json({ message: "Product added Successfully" })
        }
        else {
            res.status(500).json({ message: "Product not added" })
        }
    }
    catch (error) {
        console.log('Error in creating product:', error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

//getallproduct
const getAllProduct = async (req, res) => {
    try {
        const resultPerPage = 5;
        const productCount  = await Product.count();
        const apiFeature = new ApiFeatures(Product.findAll(), req.query).search().filter().pagination(resultPerPage);
        const allproducts = await apiFeature.query;
        if (allproducts.length > 0) {
            res.status(200).json({ message: "All products", data: allproducts, productCount })
        }
        else {
            res.status(404).json({ message: "No product Found", data: [], productCount })
        }
    }
    catch (error) {
        console.log('Error in fetching product data:', error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

//update product -- Admin
const updateProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, description, price, ratings, image, category, stock, numOfReviews, reviews } = req.body;
        let findProduct = await Product.findByPk(id);

        if (!findProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        //Update products properties
        findProduct.name = name || findProduct.name;
        findProduct.description = description || findProduct.description;
        findProduct.price = price || findProduct.price
        findProduct.ratings = ratings || findProduct.ratings
        findProduct.image = image || findProduct.image
        findProduct.category = category || findProduct.category
        findProduct.stock = stock || findProduct.stock
        findProduct.numOfReviews = numOfReviews || findProduct.numOfReviews
        findProduct.reviews = reviews || findProduct.reviews

        //update product properties
        findProduct = await findProduct.save(); // Reassign findProduct

        res.status(200).json({ message: 'Product updated successfully', data: findProduct });
    }
    catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//delete product -- Admin
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the user by ID
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: `Product with ID ${id} not found` });
        }

        // Delete the user
        await product.destroy();

        res.status(200).json({ message: `Product with ID ${id} deleted successfully` });

    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//getproduct detail
const getProductDetails = async (req, res) => {
    try {
        const { id } = req.params;
        let productDetails = await Product.findByPk(id);
        if (!productDetails) {
            return res.status(404).json({ message: "Product not found" });
        } else {
            res.status(200).json({ message: "Product:", data: productDetails });
        }
    }
    catch (error) {
        console.error('Error in fetching product details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails
}