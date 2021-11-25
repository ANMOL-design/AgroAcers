import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./../../Styles/about.css"
import AboutImg from "./../../Images/5469.jpg"
import { Link } from "react-router-dom";

class AboutUS extends React.Component {
    render() {
    return (
        <>
           <div className="container-fluid">
                <div className="about-banner">
                    <h1 className="about-banner-heading">About Us</h1>
                    <p className="about-banner-para">We are an all in one solution for your farming, our services ranges from <br />employee management to accounting know-how, to  increase production and income</p>
                </div>

                {/* Image and Text  */}
                <div className="about-outer-container mt-2">
                    <div className="">
                        <img src={AboutImg} alt="mud" className="about-img"/>
                    </div>
                    <div className="p-3 pt-0">
                        <h2 className="about-heading">All you need for your farming</h2>
                        <p className="about-para">Agriculture, with its allied sectors, is the largest source of livelihoods in India. 70 percent of its rural households still depend primarily on agriculture for their livelihood, with 82 percent of farmers being small and marginal. In 2017-18, total food grain production was estimated at 275 million tonnes (MT).  India is the largest producer (25% of global production), consumer (27% of world consumption) and importer (14%) of pulses in the world. India's annual milk production was 165 MT (2017-18), making India the largest producer of milk, jute and pulses, and with world's second-largest cattle population 190 million in 2012.[153] It is the second-largest producer of rice, wheat, sugarcane, cotton and groundnuts, as well as the second-largest fruit and vegetable producer, accounting for 10.9% and 8.6% of the world fruit and vegetable production, respectively.</p>
                        <p className="about-para">Agriculture is the art and science of cultivating the soil, growing crops and raising livestock. It includes the preparation of plant and animal products for people to use and their distribution to markets.</p>
                        <p className="about-para">Traditionally, farmers have used a variety of methods to protect their crops from pests and diseases. They have put herb-based poisons on crops, handpicked insects off plants, bred strong varieties of crops, and rotated crops to control insects. Now, almost all farmers, especially in developed countries, rely on chemicals to control pests. The definition of “pest” ranges from insects to animals such as rabbits and mice, as well as weeds and disease-causing organisms—bacteria, viruses, and fungi. With the use of chemicals, crop losses and prices have declined dramatically.</p>
                    </div>
                </div>
           </div>
        </>
    )}
}

export default AboutUS;