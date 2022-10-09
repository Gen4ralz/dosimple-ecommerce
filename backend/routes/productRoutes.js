const express = require('express');
const HomeProducts = require('../controllers/HomeProducts');
const { catProducts } = require('../controllers/HomeProducts');
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
router.delete('/delete/:id', Authorization.authorized, Product.deleteProduct);
router.get('/cat-products/:name/:page', HomeProducts.catProducts);

module.exports = router;
