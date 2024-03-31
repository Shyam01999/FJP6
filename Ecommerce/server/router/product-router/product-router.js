const express = require("express");
const productController = require("../../controllers/product/product");
const validate = require("../../middleware/validate-middleware");
const { productSchema } = require("../../validator/product-validator");
const productRouter = express.Router();

productRouter.route('/allproducts').get(productController.getAllProduct);
productRouter.route('/createproducts').post(validate(productSchema), productController.createProduct);

module.exports = productRouter;