const express = require('express');
const Product = require('../controllers/productController');
const Authorization = require('../services/Authorization');
const productValidation = require('../validations/productValidation');
const router = new express.Router();

router.post('/create-product', [Authorization.authorized], Product.create);
router.get('/products/:page', Authorization.authorized, Product.get);
router.get('/product/:id', Authorization.authorized, Product.getProduct);
router.put(
  '/product',
  [Authorization.authorized, productValidation],
  Product.updateProduct
);

module.exports = router;
