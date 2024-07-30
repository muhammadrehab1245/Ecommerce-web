const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  range: {
    type: String,
    required: true
  },
  productid: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  defaultquantity: {
    type: Number,
    required: true,
    default: 1
  },
  colors: [colorSchema]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;