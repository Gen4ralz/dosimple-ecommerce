const express = require('express');
const { register, login } = require('../controllers/userController');
const router = express.Router();
const {
  registerValidations,
  loginValidations,
} = require('../validations/userValidation');
router.post('/register', registerValidations, register);
router.post('/login', loginValidations, login);

module.exports = router;
