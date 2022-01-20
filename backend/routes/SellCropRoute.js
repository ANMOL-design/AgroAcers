const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
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

const SellerData = require("../model/SellCropSchema");

router.post("/SellCrop", (req, res) => {
  try {
    const { FarmerName ,
    FarmerFatherName ,
   EmailOfFarmer ,
   ContactNo ,
    Gender,
    city,
    State,
    Pincode ,
    AdressOfFarmer ,
    AdressOfLand ,
    TotalLandinAcers,
    CropVariety ,
   SeedUsed,
    DescriptionOfCrop ,
    YieldTime ,
    HarvestTime ,
    ImageOfCrop,
    Min_price ,
    Max_price   } = req.body;
    if (!FarmerName ||!FarmerFatherName ||!EmailOfFarmer ||!ContactNo ||!Gender||!city||!State||!Pincode ||!AdressOfFarmer ||!AdressOfLand || !TotalLandinAcers||!CropVariety || !SeedUsed||  !DescriptionOfCrop ||  !YieldTime ||  !HarvestTime ||  !ImageOfCrop||  !Min_price ,  ! Max_price ) {
      res.json({ msg: "filled are required to fill" });
    } else {
      const newFarmerCrop = new SellerData({
        FarmerName ,
        FarmerFatherName ,
       EmailOfFarmer ,
       ContactNo ,
        Gender,
        city,
        State,
        Pincode ,
        AdressOfFarmer ,
        AdressOfLand ,
        TotalLandinAcers,
        CropVariety ,
       SeedUsed,
        DescriptionOfCrop ,
        YieldTime ,
        HarvestTime ,
        ImageOfCrop,
        Min_price ,
        Max_price 
      });
      newFarmerCrop
        .save()
        .then(() => {
          res.status(201).json({ msg: "data added succesfuly" });
        })
        .catch((err) => {
          res.json({ msg: "data not added error occured"});
        });
    }
  } catch (error) {
    console.log("error occcured " + error);
  }
});
module.exports = router;
