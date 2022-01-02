import React, {useEffect} from "react";
import ProductsBrands from "./../AgroShopJSON/ProductBrands.json"
import "./../../../Styles/AgroShopHome.css";
import 'bootstrap/dist/css/bootstrap.css';

function ProductsBrand(){

   useEffect(() => {
    window.onscroll = function() {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2000) {
          // alert("you're at the bottom of the page");
          const product = document.getElementById("UniqueBrandsDetails");
          // console.log(product);
          if(product){
            product.classList.add("animation-overlay-brand");
          }
      }
    };
   }, [])

    return(
        <>
          <div className="home_products_sell borderbrands">
            <h1  className="m-4">Benefit Of Top Trusted Brands</h1>
          </div>
          {/* Details of Product Brands */}
          <div className="home-products-details container-fluid mb-4" id="UniqueBrandsDetails">
                {ProductsBrands.map( (item) => {
                    return(
                       <div className="ProductforBrandsTop" key={item.id}>
                            <img src={item.image} alt="Product" className="Producttopbrandimage" />
                       </div>
                    )
                })}
          </div>
          <hr />
        </>
    )
}

export default ProductsBrand;