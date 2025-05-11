const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Cart Item Schema
const cartItemSchema = new Schema({
    _id: { type: String, required: true }, // Allow manually set _id                  // Custom item ID from frontend
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
    userid: { type: Number, required: true }
  })

// Main Order Schema
const orderSchema = new Schema({
  id: { type: String, required: true },
  userid: { type: Number, required: true },
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
