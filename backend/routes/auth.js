const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
dotenv.config()
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
const User = require("../model/userschema") 
router.get("/",(req,res)=>{
    // res.cookie("test","aman")
    res.send("hello world")
})
router.post("/register",(req,res)=>{
    const {name,email,number,password,cpassword} = req.body;
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
        const user = new User({name,email,number,password,cpassword});
        user.save().then(()=>{
            res.status(201).json({msg:" registered succesfully"})
        }).catch((err)=>{
            res.status(501).json({msg:" failed to register"})
        })
    }).catch((err)=>{
  console.log(err)
    })
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
             expires: new Date(Date.now + 25892000000),
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
    // const {email,password} = req.body;

    // if(!email || !password){
    //     res.status(400).json({msg:"field are mandatory to fill"})
    // }

   
 
    // User.findOne({email:email}).then((userexist)=>{
    //     if(userexist ){
    //         const userlogin = User.findOne({email:email});
    //         console.log(userlogin)
    //         bycrypt.compare(password,userlogin.password).then((checkpassword)=>{
    //             if(checkpassword){
    //                 res.status(201).json({msg:"login Succesful"})
    //             }
    //         }).catch((err)=>{
    //             res.status(402).json({msg:"wrong password"})
    //         })
    //     }
    //     else{
    //         res.status(402).json({msg:"incredential"})
    //     }
    // }).catch((err)=>{
    //     res.status(500).json({msg:"error occured fail to login"})
    // })
})
module.exports = router;