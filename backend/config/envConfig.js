require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};
