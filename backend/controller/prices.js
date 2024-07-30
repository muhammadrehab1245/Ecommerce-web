const Prices = require("../models/prices");

exports.fetchPrices = async (req, res) => {
    try {
        const prices = await Prices.find({});
        res.json(prices)
      } catch (error) {
        res.status(500).send('Internal Error Occured')
      }
}

const prices=[
    {
      "value": "31-49",
      "label": "31-49",
      "checked": false
    },
    {
      "value": "50-65",
      "label": "50-65",
      "checked": false
    },
    {
      "value": "66-80",
      "label": "66-80",
      "checked": false
    },
    {
      "value": "81-95",
      "label": "81-95",
      "checked": false
    },
    {
      "value": "96-110",
      "label": "96-110",
      "checked": false
    }
  ]

  exports.AddPrices=async (req, res) => {
    try {
        const result = await Prices.insertMany(prices);
        console.log('Products added successfully:');
     //  res.status(200).send('Added')
      } catch (error) {
        console.error('Error adding products:', error);
      }
  }