const { body } = require('express-validator');

module.exports.registerValidations = [
  body('name').not().isEmpty().trim().escape().withMessage('Name is required'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .trim()
    .escape()
    .withMessage('Email is required'),
  body('password')
    .isLength({ min: 6 })
    .trim()
    .withMessage('Password should be 6 characters'),
];

module.exports.loginValidations = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .trim()
    .escape()
    .withMessage('email is required'),
  body('password').not().isEmpty().withMessage('password is required'),
];
