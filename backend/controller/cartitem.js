const Cartitems = require("../models/cartitem");

exports.FetchCart = async (req, res) => {
    try {
        const cartitems = await Cartitems.find({});
        res.json(cartitems)
      } catch (error) {
        res.status(500).send('Internal Error Occured')
      }
}

exports.FetchCartById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
    try {
      const cartitems = await Cartitems.findOne({ userId: id });
      res.status(200).json(cartitems); // Send the products as a response
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Send an error response
    }
}

exports.AddCart = async (req, res) => {
    const { itemname, tag, price, img, quantity,user } = req.body;
    console.log(user)
    if (!itemname || !tag || !price || !img || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const cart = await Cartitems.create({userId:req.user.id,itemname, tag, price, img, quantity }); // Ensure create method exists
      res.status(200).json(cart);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


  exports.DeleteCart = async (req, res) => {
    const { id } = req.body;
  
    try {
      await Cartitems.deleteOne({id}); 
      res.status(200).json('Cart Item Deleted Successfully');
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  exports.DeleteCart = async (req, res) => {
    const { id } = req.body;
    console.log(id)
    try {
      await Cartitems.deleteOne({_id:id}); 
      res.status(200).json('Cart Item Deleted Successfully');
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  exports.EmptyingCart = async (req, res) => {
    // const { id } = req.body;
    
    try {
      await Cartitems.deleteMany({userId:req.user.id}); 
      res.status(200).json('Cart Empty Successfully');
    } catch (error) {
      console.error('Error emptying item to cart:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }