const mongoose = require('mongoose');

const ctgSchema = new mongoose.Schema({
  value: { type: String, required: true },
  label: { type: String, required: true },
  checked: { type: Boolean, required: true }
});

const Category = mongoose.model('category', ctgSchema);

module.exports = Category;