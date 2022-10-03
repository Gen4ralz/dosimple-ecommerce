const express = require('express');
const Product = require('../controllers/productController');
const Authorization = require('../services/Authorization');
const router = new express.Router();

router.post('/create-product', [Authorization.authorized], Product.create);
router.get('/products/:page', Authorization.authorized, Product.get);

module.exports = router;
