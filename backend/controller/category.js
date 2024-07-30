const Category = require("../models/category");
const Product = require("../models/products");

exports.fetchCategory = async (req, res) => {
    try {
        const category = await Category.find({});
        res.json(category)
      } catch (error) {
        res.status(500).send('Internal Error Occured')
      }
}


const products=[
    {
      "value": "running shoes",
      "label": "Running Shoes",
      "checked": false
    },
    {
      "value": "hoodies",
      "label": "Hoodies",
      "checked": false
    },
    {
      "value": "t-shirt",
      "label": "T-shirt",
      "checked": false
    },
    {
      "value": "joggers",
      "label": "Joggers",
      "checked": false
    },
    {
      "value": "jacket",
      "label": "Jacket",
      "checked": false
    }
  ]

exports.addCategory=async () => {
    try {
      const result = await Category.insertMany(products);
      console.log('Products added successfully:');
   //  res.status(200).send('Added')
    } catch (error) {
      console.error('Error adding products:', error);
    }
  };