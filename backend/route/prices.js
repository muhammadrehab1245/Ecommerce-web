const express = require('express');
const { fetchPrices, AddPrices } = require('../controller/prices');


    const router = express.Router();
  //  router.get('/addproducts',addProducts)
    router.get('/fetchprices',fetchPrices)
    router.get('/addprices',AddPrices)

module.exports = router;