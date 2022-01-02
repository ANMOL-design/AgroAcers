import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./../../../Styles/AgroShopHome.css";
import 'bootstrap/dist/css/bootstrap.css';

function HomeProducts(){

    const [product, setproduct] = useState([]);
    const [cntProduct, setcntProduct] = useState([8]);

    const IncrementProductsCards = () =>{
        setcntProduct(Number(cntProduct) + 4);
    }

    if(cntProduct >= 20){
        document.getElementById("load").style.display = "none";
    }

    useEffect(() => {
        const fetchdata = async () =>{
            const {data} = await axios.get("/Shopproductdata");
            // console.log(data);
            setproduct(data);
        }
        fetchdata();

        return () => {
            //
        }
    }, [])

    return(
        <>
          <div className="home_products_sell">
                <h1 className="mb-3">BEST SELLER</h1>
          </div>
          {/* Details of Product  */}
          <div className="home-products-details container-fluid">
                {product.slice(0,cntProduct).map( (item) => {
                    return(
                        <div key={item._id} className={item.quantity > 0 ?  "card " : "card  opacity-25"} id="pc" style={{width: "17.5rem"}}>
                            {/* Upper Image Portion of card  */}
                            <div className="Product-image-container">
                                <img src={item.Imageurl} className="card-img-top home-product-image" alt="Products" />
                                    {/* Hot Icon On Card  */}
                                    <div className="Hotproducts">
                                        Save {Math.round(100*(item.old_price - item.new_price)/item.old_price)}%
                                    </div>
                                    {/* OverLay Property of card  */}
                                    <div className="overlay">
                                        <div className="overlay-img">
                                            <Link to={ "/products/" + item._id }><img src="./Images/Web/favorite_icon.svg" alt="Favorite" className="overlay-img-space" /></Link>
                                            <Link to={"/cart/" + item._id + "?qty=1"}><img src="./Images/Web/add_cart_icon.svg" alt="CartAdd" className="overlay-img-space" /></Link>
                                        </div>
                                    </div>
                             </div>
                             {/* Lower Body Portion of card  */}
                            <div className="card-body">
                                    {/* Product Price in Body  */}
                                    <div className="product-space">
                                        <span className="product-actual-price">&#8377;{item.new_price}</span>
                                        <span className="product-old-price">&#8377;{item.old_price}</span>
                                    </div>
                                    <p className="card-text">{item.Name}</p>
                                    <h5 className="card-title fade-title-header">{item.Hindi_name}</h5>   
                            </div>
                        </div>
                    )
                })}
          </div>

          <div className="product-load-more-container" id="load"> 
              <span onClick={IncrementProductsCards} className="product-load-more-btn">LOAD MORE</span>
          </div>
        </>
    )
}

export default HomeProducts;