import React, { useEffect, useState, useContext } from "react";
import {useParams, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../Loader";
import axios from "axios";
import "./../../../Styles/Cart.css";
import CartContext from "../../../Reducer/Cart/CartContext";

function MyCart(){

    const { addToCart, removeitem, cartItems } = useContext(CartContext);

    // console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const navigate = useNavigate();
    const [DataLoading, setDataLoading] = useState(false);

    const {id} = useParams();
    const value = useLocation().search;
    const qty = Number(value.split("=")[1]);

    const callAboutPage = async () => {
        try {
            const res = await fetch("/aboutuser", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
    
            const data = await res.json();
                
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

            // console.log(data);
        } 
        catch (err) {
            console.log(err);
            navigate("/login", { replace: true })
        }
    };

    useEffect(() => {
        callAboutPage();

        const fetchdata = async () =>{
            if(id){
                const {data} = await axios.get("/Shopproductdata/" + id);
                // console.log(data, qty);
                addToCart(data, qty);
            }
        }
        fetchdata();

        window.scroll(0,0);
        setDataLoading(true);
    }, []);

    var totalPrice = cartItems.reduce( (a, c) => a + c.new_price * Number(c.qty), 0 + 20);
 
    const removeFromCartHandler = (productId) =>{
        removeitem(productId)
    }

    const navigatetoproduct = (id) => {
        navigate("/products/" + id);
    }


    if (!DataLoading){
        return (
            <Loader />
        );
    }

    return(
        <>
           <div className="cart mb-5">
              <div className="cartheading">
                  Cart
              </div>
              <div className="cart-list container-fluid">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>PRODUCT</th>
                                <th></th>
                                <th>PRICE</th>
                                <th>QTY</th>
                                <th>UNIT PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                           cartItems.length === 0 ? <div className="noitems">Cart Is Empty</div> 
                           :
                           cartItems.map((item) => {
                               return(
                                   <>
                                   <tr key={item._id}>
                                        <td onClick={() => removeFromCartHandler(item._id)}><div className="cutitem">x</div></td>
                                        <td><img src={"./../" + item.Imageurl} alt="CartProduct" /></td>
                                        <td  onClick={() => navigatetoproduct(item._id)} className="cartproduct">{item.Name}</td>
                                        <td>$ {item.new_price * Number(item.qty)}</td>
                                        <td><select value={item.qty} onChange={ (e) => addToCart(item, e.target.value)}>
                                                {[...Array(item.quantity).keys()].map( x => {
                                                    return(
                                                        <option value={x+1}>{x+1}</option>
                                                    )
                                                })}
                                           </select>
                                        </td>
                                        <td>${item.new_price}</td>
                                    </tr>
                                   </>
                               )
                               })}
                        </tbody>
                    </table>
              </div>
              <div className="cart-action">
                    {/* left Coupon  */}
                    <div className="mb-3 inputvoutcher">
                        <input type="text"  placeholder="Voucher code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-primary" type="button" id="button-addon2">Redeem</button>
                    </div>
                    {/* Right Add Cart  */}
                    <div className="mb-3 col-md-4">
                        <div className="checkout marginsmall">
                            <p>SubTotal </p>
                            <span>${cartItems.reduce( (a, c) => a + c.new_price * c.qty , 0)}</span> 
                        </div>
                        <div className="checkout">
                            <p>Shipping fee</p>
                            <span>$20</span> 
                        </div>
                        <div className="checkout">
                            <p>Coupon</p>
                            <span>No</span> 
                        </div>
                        <hr />
                        <div className="checkout">
                            <h3>TOTAL </h3>
                            
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className="checkout mt-3">
                            <button className="btn btn-primary btn-block" disabled={cartItems.length === 0}>Check out</button>
                        </div>
                    </div>
              </div>
          </div>
        </>
    )
}

export default MyCart;
