const express = require('express');
const categoryValidations = require('../validations/categoryValidations');
const Category = require('../controllers/categoryController');
const router = express.Router();

router.post('/create-category', categoryValidations, Category.create);

module.exports = router;
