const { body } = require('express-validator');
module.exports = [
  body('title')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage('title is required'),
  body('price')
    .custom((value) => {
      if (parseInt(value) < 1) {
        throw new Error('Price should above 1 ฿');
      } else {
        return parseInt(value);
      }
    })
    .trim()
    .escape(),
  body('discount')
    .custom((value) => {
      if (value < 0) {
        throw new Error('Discount must not be negative');
      } else {
        return value;
      }
    })
    .trim()
    .escape(),
  body('category')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage('category is required'),
  body('description')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage('description is required'),
  body('stock')
    .custom((value) => {
      if (parseInt(value) < 0) {
        throw new Error('Stock must not be negative');
      } else {
        return parseInt(value);
      }
    })
    .trim()
    .escape(),
];
