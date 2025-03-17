const Cartitems = require("../models/category");

exports.FetchCart = async (req, res) => {
    try {
        const cartitems = await Cartitems.find({});
        res.json(cartitems)
      } catch (error) {
        res.status(500).send('Internal Error Occured')
      }
}

exports.AddCart = async (req, res) => {
    const { itemname, tag, price, img, quantity } = req.body;
  
    if (!itemname || !tag || !price || !img || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const cart = await Cartitems.create({ itemname, tag, price, img, quantity }); // Ensure create method exists
      res.status(200).json(cart);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
