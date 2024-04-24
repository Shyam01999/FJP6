const express = require("express");
const { isAuthenticated, authorizeRole } = require("../../middleware/auth");
const orderRouter = express.Router();
const orderController = require("../../controllers/order/order");

orderRouter.route('/new').post(isAuthenticated, orderController.newOrder);
// productRouter.route('/updateproduct/:id').put(isAuthenticated, authorizeRole("admin"), productController.updateProduct);
// productRouter.route('/deleteproduct/:id').delete(isAuthenticated, authorizeRole("admin"), productController.deleteProduct);
// productRouter.route('/allproducts').get(productController.getAllProduct);
// productRouter.route('/product/:id').get(productController.getProductDetails);
// productRouter.route('/review').put(isAuthenticated, productController.createReviewProduct);
// productRouter.route('/review/delete').delete(isAuthenticated, productController.deleteReviewProduct);


 
 
module.exports = orderRouter;