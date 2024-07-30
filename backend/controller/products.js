const Product = require("../models/products");

exports.fetchProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products)
      } catch (error) {
        res.status(500).send('Internal Error Occured')
      }
}

exports.fetchProductById = async (req, res) => {
  const { id } = req.params; // Destructure id directly from req.params

  try {
    console.log(id);
    const products = await Product.findOne({ productid: id }); // Correctly query the database using the id field
    res.status(200).json(products); // Send the products as a response
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' }); // Send an error response
  }
};

exports.fetchAllProducts = async (req, res) => {
  const { page, limit, urlstr } = req.query; // Destructure id directly from req.params
  console.log(page,limit,urlstr)
  // try {
  //   console.log(id);
  //   const products = await Product.findOne({ productid: id }); // Correctly query the database using the id field
  //   res.status(200).json(products); // Send the products as a response
  // } catch (error) {
  //   console.log('Error:', error);
  //   res.status(500).json({ message: 'Internal Server Error' }); // Send an error response
  // }
};

// exports.addProducts=async () => {
//     try {
//       const result = await Product.insertMany(products);
//       console.log('Products added successfully:');
//    //  res.status(200).send('Added')
//     } catch (error) {
//       console.error('Error adding products:', error);
//     }
//   };