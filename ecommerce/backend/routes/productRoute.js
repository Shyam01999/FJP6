const express = require('express');
const {getAllProducts, createProduct, updateProduct, deleteProduct, getProduct, createProductReview, getProductReviews, deleteReview} = require('../controllers/productController');
const { isAuthenticated, authorized } = require('../middleware/auth');
const productRouter = express.Router();

productRouter
.route('/products')
.get( getAllProducts)

productRouter
.route('/admin/product/new')
.post(isAuthenticated, authorized("admin"), createProduct)

productRouter
.route('/admin/product/:id')
.put(isAuthenticated, authorized("admin"), updateProduct)
.delete(isAuthenticated, authorized("admin"), deleteProduct)

productRouter
.route('/product/:id')
.get(getProduct)

productRouter
.route('/review')
.put(isAuthenticated, createProductReview)

 productRouter
 .route('/reviews/:id')
 .get(getProductReviews)
 .delete(isAuthenticated, deleteReview)


module.exports = productRouter;