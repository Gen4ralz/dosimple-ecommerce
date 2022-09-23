const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  isAdmin: {
    required: true,
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
