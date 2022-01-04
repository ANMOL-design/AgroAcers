import React,{useEffect, useState} from "react";
import "./../../../Styles/AgroShopHome.css";
import "./../../../Styles/ShopProductsDetails.css";
import Banner from "./../ImagesShop/banner.png"
import 'bootstrap/dist/css/bootstrap.css';
import {useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader";
import GrowBusiness from "./../ImagesShop/Grow.png"
import GrowBusiness2 from "./../ImagesShop/Grow2.png"
import ShopPolicy from "../AgroShopSubComponents/ShopPolicy";

function ProductsDetails(){ 

    const value = useLocation().search;
    var qty = value.split("=")[1];

    const navigate = useNavigate();

    const [product, setproduct] = useState([]);
    const [productbackup, setproductbackup] = useState([]);
    const [cntProduct, setcntProduct] = useState([8]);

    const IncrementProductsCards = () =>{
        setcntProduct(Number(cntProduct) + 4);
    }

    const [DataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        const fetchdata = async () =>{
            const {data} = await axios.get("/Shopproductdata");
            // console.log(data);
            setproduct(data);
            setproductbackup(data)

            window.scroll(0,0);
            setDataLoading(true);
        }
        fetchdata();
    }, [])

    if (!DataLoading){
        return (
            <Loader />
        );
    }

    var result = product.filter( (e) => e.category === qty);

    // console.log(productbackup)

    if(cntProduct >= result.length){
        var e = document.getElementById("load");
        if(e){
            e.style.display = "none";
        }
    }

    if(qty === "AgricultureTools"){
        qty = "Tools"
    }

    const navigatefilterproduct = () => {
        var e = document.getElementById("FindProducts");
        var value = e.value;

        // console.log(value)
        if(value === "Select"){
            
        }
        else{
            setproduct(productbackup)
            navigate(value)
        }
    }

    const sortproduct = () => {
        var e = document.getElementById("SortedProduct");
        var value = e.value;

        console.log(value)
        if(value === "Select"){
            
        }
        else if(value === "Lowest"){       
            result.sort((a, b) => {
                return a.new_price - b.new_price;
            });
            setproduct(result)
        }
        else{       
            result.sort((a, b) => {
                return b.new_price - a.new_price;
            });
            setproduct(result)
        }
    }

    const SearchProductDetails = () => {
        var e = document.getElementById("ProductSearcher");
        var value = e.value;

        console.log(value)

        result.sort((a) => {
            return  a.Name.search(value);
        });
        
        console.log(result)
    }

    return(
        <>
            {/* Banner  */}
            <img src={Banner} alt="Product Banner" className="productsDetailsImage"/>

            <div className="productsDetailsHeading">
                <p className="productsDetailsinfo text-capitalize">Store / {qty}</p>
            </div> 
            
            <div className="product-info-right-inner-acc">
                <h3 className="mb-0 text-capitalize">Total Items in {qty} Store: {result.length}</h3>  
                <div className="innner-product-info-container">
                    <span>Sort By: </span>
                    <select onChange={sortproduct} id={"SortedProduct"}>
                        <option value="Select">Select </option>
                        <option value="Lowest">Lowest </option>
                        <option value="Highest">Highest</option>
                    </select>

                    <span>Filter</span>
                    <select onChange={navigatefilterproduct} id="FindProducts">
                            <option value="Select">Select </option>
                            <option value="/ProductsDetails?value=seeds">Hybrid Seeds</option>
                            <option value="/ProductsDetails?value=Fertilizer">Fertilizer</option>
                            <option value="/ProductsDetails?value=AgricultureTools">Hardware &amp; Tools</option>
                            <option value="/ProductsDetails?value=seeds">Organic Farming</option>
                            <option value="/ProductsDetails?value=seeds">Farm Product</option>
                    </select>
                </div> 

                <div className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="ProductSearcher" />
                    <button className="btn btn-outline-success" type="submit" onClick={SearchProductDetails}>Search</button>
                </div>
            </div>   

            {/* Details of Product  */}
            <div className="home-products-details container-fluid mt-3">
                {result.slice(0,cntProduct).map( (item) => {
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

          {result.length > 8 ? 
            <div className="product-load-more-container" id="load"> 
              <span onClick={IncrementProductsCards} className="product-load-more-btn">LOAD MORE</span>
            </div> 
            :
            null
          }

        

          <hr style={{margin: "0px"}}/>
          {/* Show The Product Slider  */}
          <ShopPolicy />

            <div className="Productdetailsgrowbusinness">
                <img src={GrowBusiness} alt="GrowYourBusiness" className="Productdetailsgrowbusinnessimg"/>
                <img src={GrowBusiness2} alt="GrowYourBusiness" className="Productdetailsgrowbusinnessimg2"/>
                <div className="absproductbutton">
                    <h2>Let's Grow!</h2>
                    <button className="btn btn-outline-success">Subscribe Now</button>
                </div>
            </div>
        </>
    )
}

export default ProductsDetails;