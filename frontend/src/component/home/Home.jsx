import React from 'react'
import SellProduct from '../AgroShop/AgroShopSubComponents/ProductSubscribe';
import CrousalBanner from './Crousal';
import MyLocalWeather from './WeatherAPI/weather';
import voucherbanner from "../../Images/crousal/voucherbanner.jpg"
import AImg1 from "./../../Images/info.jpg";
import AImg2 from "./../../Images/blogs.jpg";
import AImg3 from "./../../Images/buy2.jpg";
import AImg4 from "./../../Images/govt.jpg";
import AImg5 from "./../../Images/advice2.jfif";
import "./../../Styles/Homepage.css";

class Home extends React.Component{

    componentDidMount(){
        var counter = document.querySelector(".countermystatistic");
        let count = 1;

        console.log(counter)

        setInterval( () => {
           if(count < 523){
               count++;
               counter.innerHTML = count;
           }
        }, 10)
    }

    render(){
        return(
            <>
                <CrousalBanner />

                {/* Features  */}
                <div style={{margin:"1%"}}>
                    <h1  style={{color:"#77BC3F",textAlign:"center",fontSize:"52px"}}>What is AgroAcers ?</h1>
                    <p style={{textAlign:"justify"}}>
                        AgroAcers is a data-driven full-stack technology platform that makes farming 
                        intelligent and empowers farmers to double their income. Farmers can get soil testing, 
                        training, crop protection, crop nutrition, seeds, agriculture equipment, and tools which 
                        is 300 + product range and which involves approx 25 + Agro-skilled experts who are available 
                        for the farmer's services. This in turn will help farmers to select the right Agri inputs for 
                        farming which will enhance productivity and profitability and will reduce the cost of cultivation, 
                        and eventually increase farmers' income sustainably.
                    </p>
                </div>

                {/* Our Statistics  */}
                <hr />
                <div className="crousal-data-banner" style={{margin:"5% 2%",boxShadow:"4px 4px 4px  gray"}}>
                    <span className="countermystatistic"></span>
                </div>

                {/* shop  */}
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={voucherbanner} className="d-block w-100 img-fluid" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <button className='btn btn-success' style={{width:"40%",position:"relative",float:"left"}}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What we Provide  */}
                <h1 className="about-story-heading" style={{color:"#77BC3F"}}>What We Provide ?</h1>
                <div className="features-container" data-aos="fade-right">
                     {/* Image 1  */}
                     <div className="card">
                        <img src={AImg1} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <h5 className="card-title">Well Planned Information Architecture and Services.</h5>
                        </div>
                    </div>
                     {/* Image 2  */}
                     <div className="card">
                        <img src={AImg3} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <h5 className="card-title">Buy and Sell Crops in just one click.</h5>
                        </div>
                    </div>
                     {/* Image 3  */}
                     <div className="card">
                        <img src={AImg4} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <h5 className="card-title">Information about Government Schemes and Plans.</h5>
                        </div>
                    </div>
                </div>
                <div className="container-fluid features-container" data-aos="fade-right">
                   
                    {/* Image 4  */}
                    <div className="card">
                        <img src={AImg2} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <h5 className="card-title">Latest Blogs on Farming Technology and Research.</h5>
                        </div>
                    </div>
                     {/* Image 5  */}
                     <div className="card">
                        <img src={AImg5} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <h5 className="card-title">Get Expert Advice within 24 hours.</h5>
                        </div>
                    </div>
                </div>
               

                {/* weather API  */}
                <MyLocalWeather />

                {/* Subscribe  */}
                <SellProduct />
            </>
        );
    }
}
export default Home;