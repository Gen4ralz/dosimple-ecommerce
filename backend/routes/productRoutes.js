const express = require('express');
const Product = require('../controllers/productController');
const Authorization = require('../services/Authorization');
const router = new express.Router();

router.post('/create-product', Authorization.authorized, Product.create);

module.exports = router;
