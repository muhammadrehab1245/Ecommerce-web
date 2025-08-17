const express = require('express');
const { AddOrder,fetchOrders,fetchOrderbyId,updateOrderStatus } = require('../controller/order');
const authMiddleware = require('../middleware/middleware')
    const router = express.Router();
    router.post('/addorder',authMiddleware,AddOrder)
    router.get('/fetchorders',authMiddleware,fetchOrders)
    router.get('/fetchorder/:id',authMiddleware,fetchOrderbyId)
    router.put('/updateorderstatus',authMiddleware,updateOrderStatus)
module.exports = router;