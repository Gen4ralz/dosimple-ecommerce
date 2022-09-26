const express = require('express');
const categoryValidations = require('../validations/categoryValidations');
const Category = require('../controllers/categoryController');
const Authorization = require('../services/Authorization');
const router = express.Router();

router.post(
  '/create-category',
  [categoryValidations, Authorization.authorized],
  Category.create
);

module.exports = router;
