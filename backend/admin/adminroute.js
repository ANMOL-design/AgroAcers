const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
router.use(express.json());
dotenv.config()

mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING, {
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
const ShoppingPage = require("../model/ShoppingProduct");

router.get("/AdminAgroAcers362/UserDetails", (req, res) => {

    User.find({}).then((result) => {

        res.send(result)
    })
})

router.get("/AdminAgroAcers362/ContactResult", (req, res) => {

    Contact.find({}).then((result) => {

        res.send(result)
    })
})
router.get('/cropdata', (req, res) => {
    AddBlog.find({}).then((result) => {

        res.send(result)
    })

})
router.get('/AgricultureUniversityData', (req, res) => {
    AgricultureUniversity.find({}).then((result) => {

        res.send(result)
    })

})

router.get('/Shopproductdata', (req, res) => {
    ShoppingPage.find({}).then((result) => {

        res.send(result)
    })

})

router.get('/Shopproductdata/:id', (req, res) => {

    const id = req.params.id;
    // console.log(id);

    ShoppingPage.findOne({ _id: id }).then((product) => {
        if (product) {
            // console.log(product)
            return res.send(product)
        }
    }).catch((err) => {
        console.log(err)
        res.sendStatus(404)
    })
})

router.get('/cropdata/:id', (req, res) => {

    const id = req.params.id;
    // console.log(id);

    AddBlog.findOne({ _id: id }).then((product) => {
        if (product) {
            // console.log(product)
            return res.send(product)
        }
    }).catch((err) => {
        console.log(err)
        res.sendStatus(404)
    })
})

module.exports = router;