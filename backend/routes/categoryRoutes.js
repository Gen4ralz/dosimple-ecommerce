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

router.get('/categories/:page', Authorization.authorized, Category.categories);

router.get(
  '/fetch-category/:id',
  Authorization.authorized,
  Category.fetchCategory
);

router.put(
  '/update-category/:id',
  [categoryValidations, Authorization.authorized],
  Category.updateCategory
);

router.delete('/delete-category/:id', Authorization.authorized, Category.deleteCategory)

module.exports = router;
