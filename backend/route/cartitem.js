const express = require('express');
const { FetchCart, AddCart } = require('../controller/cartitem');

    const router = express.Router();
    router.get('/fetchcart',FetchCart)
    router.post('/addcart',AddCart)

module.exports = router;