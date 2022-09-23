const express = require('express');
const { register } = require('../controllers/userController');
const router = express.Router();
const { registerValidations } = require('../validations/userValidation');
router.post('/register', registerValidations, register);

module.exports = router;
