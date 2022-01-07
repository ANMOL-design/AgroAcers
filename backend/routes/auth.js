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
dotenv.config();
const SendEmail = require("../utils/sendEmail");

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
const User = require("../model/userschema");
const sendEmail = require('../utils/sendEmail');

router.post("/register", (req, res) => {
        const { name, email, number, password, cpassword, time } = req.body;
        console.log(name);

        if (!name || !email || !number || !password || !cpassword) {
            return res.sendStatus(201);
        }
        if (password != cpassword) {
            return res.sendStatus(202);
        }
        User.findOne({ number: number }).then((numberexist) => {
            if (numberexist) {
                return res.sendStatus(220);
            }
        })
        User.findOne({ email: email })
            .then((existingUser) => {
                if (existingUser) {
                    return res.sendStatus(422);
                }
                const user = new User({ name, email, number, password, cpassword, time });
                user.save().then(() => {
                    res.status(200).json({ msg: "Registration Successful" });
                    sendEmail(user.email, user.name)
                }).catch((err) => {
                    res.status(501).json({ msg: "Failed to Register" })
                })
            }).catch((err) => {
                console.log(err)
            })
    })
    //mandidata
router.get('/data', (req, res) => {
        res.send(mandiData);
    })
    //login
router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.sendStatus(400);
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bycrypt.compare(password, userLogin.password)
            const token = await userLogin.generateAuthToken();

            res.cookie("jwtToken", token, {
                expires: new Date(2147483647 * 1000),
                httpOnly: true
            })

            if (!isMatch) {
                return res.status(401).json({ msg: "Invalid Credential" });
            } else {
                res.status(200).json({ msg: "login Succesfully" })
            }
        } else {
            return res.status(402).json({ msg: "Invalid Credential" });
        }
    } catch (err) {
        res.json({ msg: "error occured" })
    }
})

router.get('/aboutuser', Authentication, (req, res) => {
    res.send(req.rootUser);


});
router.get('/logout', (req, res) => {
    res.clearCookie('jwtToken')
    res.status(200).send('user logout');
    console.log("logout")

});


module.exports = router;