const express = require('express');
const { fetchCategory, addCategory } = require('../controller/category');

    const router = express.Router();
  //  router.get('/addproducts',addProducts)
    router.get('/fetchcategory',fetchCategory)
    router.get('/addcategory',addCategory)

module.exports = router;