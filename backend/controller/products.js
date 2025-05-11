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
    console.log(page, limit, category, range, _sort, _order);
    
    // Query object ko construct karo
    let itemsquery = {};

    // Category filtering
    if (category) {
      itemsquery.category = Array.isArray(category) ? { $in: category } : category;
    }

    // Range filtering (price range)
    if (range) {
      if (Array.isArray(range)) {
        // Agar range array hai
        itemsquery.price = {
          $gte: Math.min(...range.map(r => parseInt(r.split('-')[0]))),
          $lte: Math.max(...range.map(r => parseInt(r.split('-')[1])))
        };
      } else {
        // Agar range string hai
        const [min, max] = range.split('-').map(Number);
        itemsquery.price = { $gte: min, $lte: max };
      }
    }

    // Pagination options
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: {} 
    };

    // Sorting logic
    if (_sort && _order) {
      options.sort[_sort] = _order === 'asc' ? 1 : -1;
    }

    console.log(options);

    // Data ko paginate karo
    const data = await Product.paginate(itemsquery, options);

    // Response return karo
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

exports.Productslength = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({productlen:products.length})
  } catch (error) {
    res.status(500).send('Internal Error Occured')
  }
}


