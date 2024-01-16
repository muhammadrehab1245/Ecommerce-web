const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
//router.use(require('cookie-parser')());
router.use(require('body-parser').urlencoded({ extended: true }));
router.use(require('body-parser').json());
router.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
router.use(passport.initialize());
router.use(passport.session());


// Importing the 'signupuser' model for user sign-up and login
const signupuser = require('../models/signup');

passport.use(new LocalStrategy(
  async function(username, password, done)  {
   console.log(username,password,done)
  /* signupuser.findOne({ email:username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.password===user) { return done(null, false); }
      return done(null, user);
    }); */
  
    let user=await signupuser.findOne({ username:username })
    try{
    
      if (!user) {  return done(null, false); }
      if (!user.password===user) { return done(null, false);}
      return done(null, user);
    }
    catch(e){ 
      return done(e)
    }

  } 
));



 

  router.post('/login', passport.authenticate('local'),
  function(req, res) {
    console.log(req.user)
    res.json(req.user)
  });

  passport.serializeUser(function(user, done) {
    try{

    
    if (user) {
      console.log('aa55')
      done(null, user.id);
    }}
catch(e){
  return done(null,false)
}
   
  });
  
  passport.deserializeUser(async function(id, done) {
   let user= await signupuser.findById(id) 
   
     
     try{
      return done(null,user)
     }
     catch(e){
      if(e) return done(err, user);
     }
    });

  router.get('/test',isAuthenticate,(req,res)=>{
    req.session.test?req.session.test++:req.session.test=1;
    res.send(req.session.test.toString()+" "+req.user.username)
  })
  
  router.post('/register',async(req,res,done)=>{
   let user= await signupuser.findOne({username:req.bodyusername})
   try{
    if (user) {
      res.redirect('/')
    }
    else if(!user){
      signupuser.create({username:req.body.username,password:req.body.password})
      done(null,user)
   } 
  }
   catch(e){
     done(null,false)
   }
  })

  function isAuthenticate(req,res,done){
    if (req.user) {
      return done()
    }
    return res.redirect()
  } 

  router.post("/logout",(req,res)=>{
    req.logout(function(err) { 
      if (err) { return next(err); }
      res.redirect('/');
    });
    res.send("logged out")
  })

 /* 
router.post('/usersignup', async (req, res) => {
  const { email, password, fullname } = req.body; // 

  // Checking the password strength and extracting requirements not met
  let StrengthArray = passwordStrength(password).contains;
  let notcontain = mustcontain.filter((must) => {
    return !StrengthArray.includes(must);
  });

  // Promise to handle user sign-up logic
  const userfinding = new Promise(async (resolve, reject) => {
    let finduser = await signupuser.findOne({ email });
    let success = false;

    if (!finduser) {
      // Checking if the password meets the specified requirements
      if (notcontain.length === 0) {
        // Hashing the password before saving to the database
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(password, salt, async function (err, hash) {
            // Creating a new user with hashed password
            const usersave = await new signupuser({ fullname: fullname, email: email, password: hash });
            // Saving the new user to the database
            usersave.save();

            // Generating a JWT token for the user
            const data = {
              user: {
                id: usersave.id
              }
            };
            let token = jwt.sign(data, key);
            resolve(token);
          });
        });
      } else {
        reject(notcontain);
      }
    } else {
      reject("This email is already exist! Try another");
    }
  });

  // Handling the result of the user sign-up process
  userfinding
    .then((value) => {
      success = true;
      res.json({ value, success });
    })
    .catch((e) => {
      res.json(e);
    });
}); */

/*
// Route to handle user login
router.post('/userlogin', async (req, res) => {
  const { email, password } = req.body;

  // Promise to handle user login logic
  const userfinding = new Promise(async (resolve, reject) => {
    let finduser = await signupuser.findOne({ email });
    let success = false;

    if (finduser) {
      // Comparing the provided password with the hashed password in the database
      bcrypt.compare(password, finduser.password, async function (err, result) {
        if (result) {
          // Generating a JWT token for the authenticated user
          const data = {
            user: {
              id: finduser.id
            }
          };
          let token = jwt.sign(data, key);
          resolve(token);
        } else {
          reject("Wrong Credentials");
        }
      });
    } else {
      reject("Wrong Credentials");
    }
  });

  // Handling the result of the user login process
  userfinding
    .then((value) => {
      success = true;
      res.json({ value, success });
    })
    .catch((e) => {
      res.status(400).json({ value: e });
    });
}); */



module.exports = router;