const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
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

const SellerData = require("../model/SellCropSchema");

router.post("/SellCrop", (req, res) => {
    try {

        const {
            FarmerName,
            FarmerFatherName,
            EmailOfFarmer,
            ContactNo,
            Gender,
            city,
            State,
            Pincode,
            AdressOfFarmer,
            AdressOfLand,
            TotalLandinAcers,
            CropVariety,
            SeedUsed,
            DescriptionOfCrop,
            YieldTime,
            HarvestTime,
            ImageOfCrop,
            Min_price,
            Max_price
        } = req.body;

        if (!FarmerName || !FarmerFatherName || !EmailOfFarmer || !ContactNo || !Gender || !city || !State || !Pincode || !AdressOfFarmer || !AdressOfLand || !TotalLandinAcers || !CropVariety || !SeedUsed || !DescriptionOfCrop || !YieldTime || !HarvestTime || !ImageOfCrop || !Min_price, !Max_price) {
            console.log("Data Added losse Success")
            return res.sendStatus(201);
        } else {
            console.log("Data Added Success in  progress")

            const newFarmerCrop = new SellerData({
                FarmerName,
                FarmerFatherName,
                EmailOfFarmer,
                ContactNo,
                Gender,
                city,
                State,
                Pincode,
                AdressOfFarmer,
                AdressOfLand,
                TotalLandinAcers,
                CropVariety,
                SeedUsed,
                DescriptionOfCrop,
                YieldTime,
                HarvestTime,
                ImageOfCrop,
                Min_price,
                Max_price
            });

            newFarmerCrop.save().then(() => {
                    res.status(200).json({ msg: "data added succesfuly" });
                })
                .catch((err) => {
                    res.json({ msg: "data not added error occured" });
                });
        }
    } catch (error) {
        console.log("error occcured " + error);
    }
});

router.get('/SellCropdata', (req, res) => {
    SellerData.find({}).then((result) => {
        res.send(result)
    })

})

router.get('/SellCropdata/:id', (req, res) => {

    const id = req.params.id;

    SellerData.findOne({ _id: id }).then((product) => {
        if (product) {
            return res.send(product)
        }
    }).catch((err) => {
        console.log(err)
        res.sendStatus(404)
    })
})

module.exports = router;