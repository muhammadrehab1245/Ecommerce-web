const express = require('express');
const {   fetchProducts, fetchProductById, fetchAllProducts, Productslength} = require('../controller/products');
    const router = express.Router();
  //  router.get('/addproducts',addProducts)
    router.get('/fetchproducts',fetchProducts)
    router.get('/fetchproducts/:id',fetchProductById)
    router.get('/fetchallproducts',fetchAllProducts)
    router.get('/fetchproductslength',Productslength)
module.exports = router;