const express = require('express');
const categoryValidations = require('../validations/categoryValidations');
const Category = require('../controllers/categoryController');
const Authorization = require('../services/Authorization');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router.post(
  '/create-category',
  [categoryValidations, Authorization.authorized],
  Category.create
);

router.get(
  '/categories/:page',
  Authorization.authorized,
  categoryController.categories
);

module.exports = router;
