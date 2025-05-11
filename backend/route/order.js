const express = require('express');
const { AddOrder } = require('../controller/order');
const authMiddleware = require('../middleware/middleware')
    const router = express.Router();
    router.post('/addorder',authMiddleware,AddOrder)

module.exports = router;