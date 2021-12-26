const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
router.use(express.json());
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
     const User = require('../model/userschema')
    const Contact = require('../model/contactpage')
    const AddBlog = require("../model/Postblog")
    const AgricultureUniversity = require("../model/AgricultureUniversitySchema");
     router.get("/AdminAgroAcers362/UserDetails",(req,res)=>{
         
        User.find({}).then((result)=>{
           
            res.send(result)
        })
     })
     router.get("/AdminAgroAcers362/ContactResult",(req,res)=>{
         
       Contact.find({}).then((result)=>{
           
            res.send(result)
        })
     })
     router.get('/blogdata',(req,res)=>{
        AddBlog.find({}).then((result)=>{
               
            res.send(result)
        })
    
      })
     router.get('/AgricultureUniversityData',(req,res)=>{
        AgricultureUniversity.find({}).then((result)=>{
               
            res.send(result)
        })
    
      })
     module.exports = router;