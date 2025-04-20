const express = require('express');
const { FetchCart, AddCart } = require('../controller/cartitem');
const authMiddleware = require('../middleware/middleware')
    const router = express.Router();
    router.get('/fetchcart',FetchCart)
    router.post('/addcart',authMiddleware,AddCart)

module.exports = router;