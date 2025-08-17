const Order = require("../models/order");

exports.AddOrder = async (req, res) => {
  try {
    const { userId, status, cartitem, data } = req.body;

    const newOrder = await Order.create({
      userId,
      status,
      cartitem,
      data
    });

    res.status(200).json({ message: 'Order Added Successfully', order: newOrder });
  } catch (error) {
    console.error('Error while adding order:', error);
    res.status(500).send('Internal Error Occurred');
  }
};

exports.fetchOrders = async (req, res) => {
  try {
    const { userId, status, cartitem, data } = req.body;

    const newOrder = await Order.create({
      userId,
      status,
      cartitem,
      data
    });

    res.status(200).json({ message: 'Order Added Successfully', order: newOrder });
  } catch (error) {
    console.error('Error while adding order:', error);
    res.status(500).send('Internal Error Occurred');
  }
};


exports.fetchOrderbyId = async (req, res) => {
  const { id } = req.params;
  console.log(id)
    try {
      const orderitems = await Order.findOne({ userId:id });
      res.status(200).json(orderitems); // Send the products as a response
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Send an error response
    }
}

exports.updateOrderStatus = async (req, res) => {
  const { status } = req.body;
    try {
      await Order.updateOne(
        { _id: req.body._id },  // Matching the document by its _id
        { $set: { status: status } }                    // Update the status field
      );; 
      res.status(200).json('Order Status Updated'); // Send the products as a response
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Send an error response
    }
} 