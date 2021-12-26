const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
router.use(express.json());
const mandiData = require('../data/data.json')
const Authentication = require('../middleware/authentication')
var cookieParser = require('cookie-parser');
router.use(cookieParser());
dotenv.config()
const SendEmail = require("../utils/sendEmail")
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
     {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     
     },
     (err) => {
     if (err) throw err;
     console.log("MongoDB connection established");
     }
     );
const User = require("../model/userschema"); 
const sendEmail = require('../utils/sendEmail');

router.post("/register",(req,res)=>{
    const {name,email,number,password,cpassword,time} = req.body;
    console.log(name);

    if(!name || !email || !number || !password || !cpassword){
        return res.json({msg:"Filled are required to fill"})
    }
    if(password != cpassword){
        return res.json({msg:"confirm password should be same as password"})
    }
    User.findOne({number:number}).then((numberexist)=>{
        if(numberexist){
        res.json({msg:"phone number already exist"})
        }
    })
    User.findOne({email:email})
    .then((existingUser)=>{
        if(existingUser){
            res.status(422).json({msg:"user already exist"})
        }
        const user = new User({name,email,number,password,cpassword,time});
        user.save().then(()=>{
            res.status(201).json({msg:" registered succesfully"})
            sendEmail(user.email,user.name)
        }).catch((err)=>{
            res.status(501).json({msg:" failed to register"})
        })
    }).catch((err)=>{
  console.log(err)
    })
})
//mandidata
router.get('/data',(req,res)=>{
  res.send(mandiData);
})
//login
router.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
        res.status(400).json({msg:"field are mandatory to fill"})
        }
 
     const userLogin =  await User.findOne({email:email});
     if(userLogin){
         const isMatch = await bycrypt.compare(password,userLogin.password)
         const token = await userLogin.generateAuthToken(); 
         res.cookie("jwtToken",token,{
             expires:  new Date(2147483647 * 1000),
             httpOnly :true
         })
     if(!isMatch){
         res.status(400).json({msg:"Invalid credential"})
     }
     else{
         res.status(201).json({msg:"login Succesfully"})
     }
    }
    else{
        res.status(400).json({msg:"Invalid credential"})
    }
    }
    catch(err){
        res.json({msg:"error occured"})
    }
})

router.get('/aboutuser', Authentication, (req, res) => {
    res.send(req.rootUser);

  
  });
router.get('/logout',(req, res) => {
    res.clearCookie('jwtToken')
    res.status(200).send('user logout');
   console.log("logout")
  
  });

  
module.exports = router;