const express = require('express');
const Product = require('../controllers/productController');
const Authorization = require('../services/Authorization');
const productValidations = require('../validations/productValidations');
const router = new express.Router();

router.post('/create-product', [Authorization.authorized, productValidations], Product.create);

module.exports = router;
