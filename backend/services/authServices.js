const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config/envConfig');
const jwt = require('jsonwebtoken');

module.exports.hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hased = await bcrypt.hash(password, salt);
  return hased;
};

module.exports.comparePassword = async (password, dbPassword) => {
  return await bcrypt.compare(password, dbPassword);
};

module.exports.generateToken = (user) => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: '7d',
  });
};
