import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import ProductsData from "./AgroShopJSON/ProductsHome"
import "./../../Styles/AgroShopHome.css";
import 'bootstrap/dist/css/bootstrap.css';

function ProductsForYou(){

   useEffect(() => {
    window.onscroll = function() {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 1000) {
          // alert("you're at the bottom of the page");
          const product = document.getElementById("UniqueProductsDetails");
          // console.log(product);
          if(product){
            product.classList.add("animation-overlay");
          }
      }
    };
   }, [])

    return(
        <>
          <hr />
          <div className="home_products_sell m-2 mb-4">
            <h1>Products for you!</h1>
          </div>
          {/* Details of Product  */}
          <div className="home-products-details container-fluid mb-4" id="UniqueProductsDetails">
                {ProductsData.map( (item) => {
                    return(
                       <div className="Productforyoucont" key={item.id}>
                            <Link to="/">
                                <img src={item.image} alt="Product" className="Productforyouimage" />
                                <h6 className="Productforyouheading">{item.heading}</h6>
                           </Link>
                       </div>
                    )
                })}
          </div>
        </>
    )
}

export default ProductsForYou;