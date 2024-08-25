const Product = require("../models/products");
// const mongoosePaginate = require('mongoose-paginate-v2');
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
  try {
    const { page, limit, category, range, _sort, _order } = req.query;
    console.log(page, limit, category, range, _sort, _order)
    // Construct the query object
    let itemsquery = {};

    // Category filtering
    if (category) {
      itemsquery.category = Array.isArray(category)? { $in: category } : category;
    }

    // Range filtering (price range)
    if (range) {
      // Handle range as an array of ranges
      const ranges = Array.isArray(range) ? range : [range];
      itemsquery.price = {
        $or: ranges.map(r => {
          const [min, max] = r.split('-').map(Number);
          return { $gte: min, $lte: max };
        })
      };
    }

    // Pagination and sorting options
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: {} // Correctly use sort key
    };
    
    if (_sort && _order) {
      options.sort[_sort] = _order === 'asc' ? 1 : -1; 
    }
    
    console.log(options);

    // Retrieve data with mongoose's paginate method
    const data = await Product.paginate(itemsquery, options);

    // Return the response
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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
