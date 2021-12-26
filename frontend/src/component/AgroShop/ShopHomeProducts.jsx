import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./../../Styles/AgroShopHome.css";
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
            const {data} = await axios.get("/api/products");
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
            <h1>BEST SELLER</h1>
            <div className="home_products_links">
                <ul>
                    <li><Link to="/shop/products?value=Hybrid Seeds">Hybrid Seeds</Link></li>
                    <li><Link to="/shop/products?value=Fertilizers">Fertilizers</Link></li>
                    <li><Link to="/shop/products?value=Agro Tools">Hardware &amp; Tools</Link></li>  
                    <li><Link to="/shop/products?value=Organic Farming">Organic Farming</Link></li>
                    <li><Link to="/shop/products?value=Farm Products">Farm Products</Link></li>
                </ul>
            </div>
          </div>
          {/* Details of Product  */}
          <div className="home-products-details container-fluid">
                {product.slice(0,cntProduct).map( (item) => {
                    return(
                        <div key={item.id} className="card " id="pc" style={{width: "17.5rem"}}>
                            {/* Upper Image Portion of card  */}
                            <div className="Product-image-container">
                                <img src={item.image} className="card-img-top home-product-image" alt="Products" />
                                    {/* Hot Icon On Card  */}
                                    <div className="Hotproducts">
                                        Save {Math.round(100*(item.oldPrice - item.Price)/item.oldPrice)}%
                                    </div>
                                    {/* OverLay Property of card  */}
                                    <div className="overlay">
                                        <div className="overlay-img">
                                            <Link to={ "/products/" + item.id }><img src="./Images/Web/favorite_icon.svg" alt="Favorite" className="overlay-img-space" /></Link>
                                            <Link to={"/cart/" + item.id + "?qty=1"}><img src="./Images/Web/add_cart_icon.svg" alt="CartAdd" className="overlay-img-space" /></Link>
                                        </div>
                                    </div>
                             </div>
                             {/* Lower Body Portion of card  */}
                            <div className="card-body">
                                    {/* Product Price in Body  */}
                                    <div className="product-space">
                                        <span className="product-actual-price">&#8377;{item.Price}</span>
                                        <span className="product-old-price">&#8377;{item.oldPrice}</span>
                                    </div>
                                    <p className="card-text">{item.product_name}</p>
                                    <h5 className="card-title fade-title-header">{item.product_nick_name}</h5>   
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