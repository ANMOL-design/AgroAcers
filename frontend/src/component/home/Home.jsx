import React from 'react'
import { Link } from 'react-router-dom';
import SellProduct from '../AgroShop/AgroShopSubComponents/ProductSubscribe';
import CrousalBanner from './Crousal';
import voucherbanner from "../../Images/crousal/voucherbanner.jpg";
import weather from "./../../Images/weather-forecast.jpg"
import AImg1 from "./../../Images/info.jpg";
import AImg2 from "./../../Images/blogs.jpg";
import AImg3 from "./../../Images/buy2.jpg";
import AImg4 from "./../../Images/govt.jpg";
import AImg5 from "./../../Images/advice2.jfif";
import "./../../Styles/Homepage.css";

class Home extends React.Component{

    componentDidMount(){
        var counter = document.querySelector(".countermystatistic");
        var company = document.querySelector(".countermystatisticcompany");
        var Blog = document.querySelector(".countermystatisticblog");
        var Mandi = document.querySelector(".countermystatisticrate");

        let count = 1;
        let companycnt = 1;
        let blogcnt = 1;
        let mandicnt =1;


        setInterval( () => {
           if(count < 550){
               count++;
               counter.innerHTML = count;
               if(count === 550){
                counter.innerHTML = "550+";
               }
           }
        }, 22)

        setInterval( () => {
            if(companycnt < 50){
                companycnt++;
                company.innerHTML = companycnt;
                if(companycnt === 50){
                    company.innerHTML = "50+";
                }
            }
         }, 240)

         setInterval( () => {
            if(blogcnt < 200){
                blogcnt++;
                Blog.innerHTML = blogcnt;
                if(blogcnt === 200){
                    Blog.innerHTML = "200+";
                }
            }
         }, 60)

         setInterval( () => {
            if(mandicnt < 3000){
                mandicnt++;
                Mandi.innerHTML = mandicnt;
                if(mandicnt === 3000){
                    Mandi.innerHTML = "3000+";
                }
            }
         }, 0.1)
    }

    render(){
        return(
            <>
                <CrousalBanner />

                {/* Features  */}
                <div style={{margin:"1%"}}>
                    <h1  className="homepage-story-heading">What is AgroAcers ?</h1>
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
                <div className="crousal-statistic-outer-container">
                    {/* Head  */}
                    <div className="m-1 mt-2">
                        <h1 className="homepage-story-heading mb-0" style={{fontSize:"3rem", textDecoration: "underline"}}>Our Main Statistics</h1>
                    </div>

                    {/* inner contaier  */}
                    <div className="crousal-statistic-inner-container"  data-aos="fade-down">
                        <div className="crousal-statistic-maincont">
                            <i className='fa fa-opencart' style={{color: "#77BC3F", fontSize: "100px"}}></i>
                            <div className='fixthewidth'>
                                <h2 className="countermystatistic">550+</h2>
                                <h3>Agriculture Products</h3>
                            </div>
                        </div>
                        <div className="crousal-statistic-maincont">
                            <i className='fa fa-building-o' style={{color: "#77BC3F", fontSize: "102px"}}></i>
                            <div className='fixthewidth'>
                                <h2 className="countermystatisticcompany">50+</h2>
                                <h3>Agriculture Companies</h3>
                            </div>
                        </div>
                        <div className="crousal-statistic-maincont">
                            <i className='fa fa-comments-o' style={{color: "#77BC3F", fontSize: "120px"}}></i>
                            <div className='fixthewidth'>
                                <h2 className="countermystatisticblog">200+</h2>
                                <h3>Agriculture Blogs</h3>
                            </div>
                        </div>
                        <div className="crousal-statistic-maincont">
                            <i className='fa fa-dollar' style={{color: "#77BC3F", fontSize: "108px"}}></i>
                            <div className='fixthewidth'>
                                <h2 className="countermystatisticrate">3000+</h2>
                                <h3>Agriculture Mandi</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What we Provide  */}
                <h1 className="homepage-story-heading mt-3">What We Provide ?</h1>
                <div className="features-container" data-aos="fade-right">
                     {/* Image 1  */}
                     <div className="card">
                        <img src={AImg1} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <Link to="/mandirates" className="card-title-link-home">
                                <h5 className="card-title">Well Planned Information Architecture and Services.</h5>
                            </Link>
                        </div>
                    </div>
                     {/* Image 2  */}
                     <div className="card">
                        <img src={AImg3} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <Link to="/CropSellDashboard" className="card-title-link-home">
                                <h5 className="card-title">Buy and Sell Crops in just one click.</h5>
                            </Link>
                        </div>
                    </div>
                     {/* Image 3  */}
                     <div className="card">
                        <img src={AImg4} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <Link to="/GovternmentScheme" className="card-title-link-home">
                                <h5 className="card-title">Information about Government Schemes and Plans.</h5>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid features-container" data-aos="fade-right">
                    {/* Image 4  */}
                    <div className="card">
                        <img src={AImg2} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <Link to="/crops" className="card-title-link-home">
                                <h5 className="card-title">Latest Blogs on Farming Technology and Research.</h5>
                            </Link>
                        </div>
                    </div>
                     {/* Image 5  */}
                     <div className="card">
                        <img src={AImg5} className="card-img-top" alt="Feature" />
                        <div className="card-body">
                            <Link to="/contact" className="card-title-link-home">
                                <h5 className="card-title">Get Expert Advice within 24 hours.</h5>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* shop  */}
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={voucherbanner} className="d-block w-100 img-fluid" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <Link to="/MyWeather"><button className='btn btn-success' style={{width:"40%",position:"relative",float:"left"}}>Check Weather</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Weather  */}
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={weather} className="d-block w-50 img-fluid" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <Link to="/MyWeather"><button className='btn btn-success' style={{position:"relative",float:"left"}}>Check Weather</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                
               
                {/* Subscribe  */}
                <div data-aos="fade-down">
                    <SellProduct />
                </div>
            </>
        );
    }
}
export default Home;