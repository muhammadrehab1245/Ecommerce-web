const mongoose = require('mongoose');

const pricesSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      checked: {
        type: Boolean,
        default: false,
      },
});

const Prices = mongoose.model('prices', pricesSchema);

module.exports = Prices;
