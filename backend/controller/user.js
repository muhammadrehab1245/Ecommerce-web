const express = require('express');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
let jwttoken='newuser'
const { validationResult } = require('express-validator');
const SignupModel = require('../models/signup');
exports.createUser = async (req, res) => {
  let success = false;

  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  // Ensure email is provided
  if (!req.body.username) {
    return res.status(400).json({ success, error: 'Email is required' });
  }

  // Check for existing user by email
  let user = await SignupModel.findOne({ username: req.body.username });

  if (user) {
    return res.status(400).json({ success, error: 'Sorry, user email already exists. Try another' });
  }

  try {
    // Hash the password
    const hash = await argon2.hash(req.body.password);
    console.log('Hashing:', hash);

    // Create a new user
    user = await SignupModel.create({
      username: req.body.username,
      // email: req.body.email,
      password: hash, // Secure the password using hashing
    });

    const data = {
      user: {
        id: user.id
      }
    };

    const token = jwt.sign(data, jwttoken);
    success = true;
    res.json({ success, token });

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error occurred');
  }
};

exports.loginUser= async (req,res)=>{
  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) { 
    return res.status(400).json({ errors: errors.array() });
  }

  const {username,password}=req.body
  try{
  let user=await SignupModel.findOne({username})
  if (!user) {
    success=false;
    return res.status(400).json({error:'Try To Login With Other Credentials'})
  }
  
  const passwordCheck = await argon2.verify(user.password, password);
 console.log('pasword',passwordCheck)
  if (!passwordCheck) {
    success=false;
    return res.status(400).json({success,error:'Try To Login With Other Credentials'})
  }
    const data={
      user:{
        id:user.id
      }
    }

    var token = jwt.sign(data,jwttoken);
    success=true;
        res.json({success,token})
  }
  catch(e){
    console.log(e.message)
    res.status(500).send('Internal Error Occured')
  }
}