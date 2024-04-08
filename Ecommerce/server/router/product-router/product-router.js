const express = require("express");
const productController = require("../../controllers/product/product");
const validate = require("../../middleware/validate-middleware");
const { productSchema } = require("../../validator/product-validator");
const productRouter = express.Router();

productRouter.route('/createproduct').post(validate(productSchema), productController.createProduct);
productRouter.route('/updateproduct/:id').put(productController.updateProduct);
productRouter.route('/deleteproduct/:id').delete(productController.deleteProduct);
productRouter.route('/allproducts').get(productController.getAllProduct);
productRouter.route('/product/:id').get(productController.getProductDetails);


 

module.exports = productRouter;