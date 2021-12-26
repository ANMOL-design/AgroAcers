import React from "react";
import { Link } from "react-router-dom";
import ProductsData from "./AgroShopJSON/ProductsHome"
import "./../../Styles/AgroShopHome.css";
import 'bootstrap/dist/css/bootstrap.css';

function ProductsForYou(){

    return(
        <>
          <hr />
          <div className="home_products_sell m-2 mb-4">
            <h1>Products for you!</h1>
          </div>
          {/* Details of Product  */}
          <div className="home-products-details container-fluid mb-4" data-toggle="animation" data-animation-start="onScroll" data-animation-on-scroll="repeat" data-animation="slide-in-left">
                {ProductsData.map( (item) => {
                    return(
                       <div className="Productforyoucont" key={item.id}>
                            <Link to="/">
                                <img src={item.image} alt="Product" className="Productforyouimage"  data-mdb-animation-on-scroll="repeat"/>
                                <h6 className="Productforyouheading"  data-mdb-animation-on-scroll="repeat">{item.heading}</h6>
                           </Link>
                       </div>
                    )
                })}
          </div>
        </>
    )
}

export default ProductsForYou;