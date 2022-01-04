import React,{useEffect, useState} from "react";
import "./../../Styles/AgroShopHome.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Banner from "./ImagesShop/agriculture-banner-new.jpg";
import Banner2 from "./ImagesShop/Banner5.jpg";
import Loader from "../Loader";
import ShopPolicy from "./AgroShopSubComponents/ShopPolicy";
import HomeProducts from "./AgroShopSubComponents/ShopHomeProducts";
import ProductsForYou from "./AgroShopSubComponents/ProductsInHome";
import ProductsBrand from "./AgroShopSubComponents/ProductBrands";
import SellProduct from "./AgroShopSubComponents/ProductSubscribe";


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
            <div className="ShopPageBannerHome">
                <img src={Banner} alt="" className="ShopPageBannerHomeImage"/>
                <div className="ShopPageBannerHomeInner">
                    <button className="btn btn-light">SHOP NOW</button>
                </div>
            </div>

            {/* Links */}
            <div className="home_products_links">
                <Link to="/">Hybrid Seeds</Link>
                <Link to="/">Fertilizer</Link>
                <Link to="/">Hardware &amp; Tools</Link>
                <Link to="/">Organic Farming</Link>
                <Link to="/">Farm Product</Link>
            </div>
           
            {/* Adding The Products to home  */}
            <HomeProducts />

            <div className="ShopPageBannerHome mt-2">
                <img src={Banner2} alt="" className="ShopPageBannerHomeImage"/>
                <div className="ShopPageBannerHomeInner2">
                    <h1>BEST PRICE AVAILABLE</h1>
                    <p>Our Best Seed Available At Your Doorstep!</p>
                    <button className="btn btn-success">SHOP NOW</button>
                </div>
            </div>

            {/* Print The Policy  */}
            <ShopPolicy />

            {/*Products for You to home  */}
            <ProductsForYou />

            {/* Top Brands  */}
            <ProductsBrand />

            {/* Sell Products  */}
            <SellProduct />
        </>
    )
}

export default ShopHome;
