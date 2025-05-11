const express = require('express');
const {   fetchProducts, fetchProductById, fetchAllProducts, Productslength,AddProducts} = require('../controller/products');
    const router = express.Router();
  //  router.get('/addproducts',addProducts)
    router.get('/fetchproducts',fetchProducts)
    router.get('/fetchproducts/:id',fetchProductById)
    router.get('/fetchallproducts',fetchAllProducts)
    router.get('/fetchproductslength',Productslength)
    router.post('/addproducts',AddProducts)
module.exports = router;