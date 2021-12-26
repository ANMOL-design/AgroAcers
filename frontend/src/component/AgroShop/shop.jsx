import React,{useEffect, useState} from "react";
import "./../../Styles/AgroShopHome.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Banner1 from "./ImagesShop/Banner1.jpeg";
import Banner2 from "./ImagesShop/Banner5.jpg";
import Banner3 from "./ImagesShop/infobanner1.jpg";
import Loader from "../Loader";
import ShopPolicy from "./ShopPolicy";
import HomeProducts from "./ShopHomeProducts";
import ProductsForYou from "./ProductsInHome";


function ShopHome(){


    const [DataLoading, setDataLoading] = useState(false);


    useEffect(() => {
        window.scroll(0,0);
        setDataLoading(true);
    }, []);

    if (!DataLoading){
        return (
            <Loader />
        );
    }

    return(
        <>
            {/* Print The Slider  */}
            <div id="carouselExampleControls" className="carousel slide border-on-slider" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="/"><img src={Banner1} className="d-block w-100" alt="ShoppingBanner" /></Link>
                    </div> 
                    <div className="carousel-item ">
                        <Link to="/"><img src={Banner2} className="d-block w-100" alt="ShoppingBanner" /></Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/"><img src={Banner3} className="d-block w-100" alt="ShoppingBanner" /></Link>
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div>

            {/* Print The Policy  */}
            <ShopPolicy />

            {/* Adding The Products to home  */}
            <HomeProducts />

            {/*Products for You to home  */}
            <ProductsForYou />
        </>
    )
}

export default ShopHome;
