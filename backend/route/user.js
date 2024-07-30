const express = require('express');
const { body } = require('express-validator');
const SignupModel = require('../models/signup');
const { createUser, loginUser } = require('../controller/user');
    const router = express.Router();
    router.post('/createuser',[
        body('username','username length short').isLength({ min: 3 }),
        body('password','password should be 6 digits minimum').isLength({ min: 6 })
    ],createUser)


    router.post('/loginuser',[
        body('email','Enter Valid email'),
        body('password','Password should not be empty').exists()
    ],loginUser)





module.exports = router;