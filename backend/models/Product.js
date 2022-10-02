const mongoose = require('mongoose');
const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      required: true,
      type: Number,
    },
    discount: {
      required: true,
      type: Number,
    },
    stock: {
      required: true,
      type: Number,
    },
    category: {
      required: true,
      type: String,
    },
    colors: {
      type: [Map],
    },
    sizes: {
      type: [Map],
    },
    image1: {
      required: true,
      type: String,
    },
    image2: {
      required: true,
      type: String,
    },
    image3: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
