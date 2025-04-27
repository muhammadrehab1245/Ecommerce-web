const express = require('express');
const { FetchCart, AddCart,FetchCartById,DeleteCart,EmptyingCart } = require('../controller/cartitem');
const authMiddleware = require('../middleware/middleware')
    const router = express.Router();
    router.get('/fetchcart',authMiddleware,FetchCart)
    router.post('/addcart',authMiddleware,AddCart)
    router.get('/fetchcart/:id',authMiddleware,FetchCartById)
    router.delete('/deletecart',authMiddleware,DeleteCart)
    router.get('/emptycart',authMiddleware,EmptyingCart)

module.exports = router;