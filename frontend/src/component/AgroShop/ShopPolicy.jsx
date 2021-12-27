import React from "react";
import "./../../Styles/AgroShopHome.css";
import 'bootstrap/dist/css/bootstrap.css';
import Data from "./AgroShopJSON/Shoppolicy.json";

function ShopPolicy(){

    return(
        <>
           {/* policies Shown  */}
          <div className="home-products-policies-container">
            {Data.map( (item) => {
              return(
                <div className="products-shipping" key={item.id}>
                    <img src={item.image} alt="Shopping" />
                    <div>
                        <h4 className="products-shipping-heading">{item.heading}</h4>
                        <p className="products-shipping-para">{item.paragraph}</p>
                    </div>
                </div>
              )
            })}
          </div>
        </>
    )
}

export default ShopPolicy;
