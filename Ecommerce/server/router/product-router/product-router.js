const express = require("express");
const productController = require("../../controllers/product/product");
const productRouter = express.Router();

productRouter.route('/allproducts').get(productController.getAllProduct);

module.exports = productRouter;