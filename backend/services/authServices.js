const bcrypt = require('bcrypt');

module.exports.hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hased = await bcrypt.hash(password, salt);
  return hased;
};
