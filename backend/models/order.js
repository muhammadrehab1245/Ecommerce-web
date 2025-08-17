const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Cart Item Schema
const cartItemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  productid: { type: String, required: true },
  range: { type: String, required: true },
  price: { type: Number, required: true },
  defaultquantity: { type: Number, required: true },
  Imageshow: { type: String, required: true },
  selectedColor: { type: String, required: true },
  selectedSize: { type: String, required: true },
  ItemTotal: { type: Number, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  id: {
    type: Schema.Types.ObjectId,
    ref: 'cart'
  }
}, { _id: false }); // 👈 disables auto _id for nested cartitem

// Main Order Schema
const orderSchema = new Schema({
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'user'

  },
  status: { type: String, required: true },
  cartitem: [cartItemSchema], // Array of cart items
  data: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    streetaddress: { type: String, required: true },
    city: { type: String, required: true },
    region: { type: String, required: true },
    postalcode: { type: String, required: true },
    paymenttype: { type: String, required: true }
  }
});

// Create a model from the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
