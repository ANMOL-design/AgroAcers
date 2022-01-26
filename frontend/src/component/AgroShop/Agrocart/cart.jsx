import React, { useEffect, useState, useContext } from "react";
import {useParams, useLocation, useNavigate, Link } from "react-router-dom";
import Loader from "../../Loader";
import axios from "axios";
import "./../../../Styles/Cart.css";
import CartContext from "../../../Reducer/Cart/CartContext";

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

function MyCart(){

    const { addToCart, removeitem, cartItems } = useContext(CartContext);

    // console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const navigate = useNavigate();
    const [DataLoading, setDataLoading] = useState(false);
    const [coupon, setcoupon] = useState("");
    const [couponvalue, setcouponvalue] = useState("");
    const [userData, setUserData] = useState({});

    const [pricepay, setpricepay] = useState(0);

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

            setUserData(data);
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
 
    const removeFromCartHandler = (productId) =>{
        removeitem(productId);
    }

    const navigatetoproduct = (id) => {
        navigate("/products/" + id);
    }

    const totalPrice = cartItems.reduce( (a, c) => a + c.new_price * Number(c.qty), 0 + 200);

    const HandleVoucher = () => {
        if(couponvalue === "AGROACERSVOUCHER200"||couponvalue === "FARMER200"){
            setcoupon("YES")
            var element = document.getElementById("button-addon2voucher");
            if(element){
                element.disabled = true;
                setpricepay(totalPrice-200)
            }
        }
        else if(couponvalue === ""){
            setcoupon("")
            setpricepay(totalPrice)
        }
        else{
            setcoupon("Invalid")
            setpricepay(totalPrice)
        }
    }

    async function displayRazorpay() {

        setpricepay(totalPrice);

        // console.log(pricepay)

		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Check your Internet Connection.')
			return
		}

		const data = await fetch('/razorpay',{ 
            method: 'POST',
            headers: {
                "content-Type" : "application/json",
            },
            body: JSON.stringify({
                pricepay,
            })
        }).then((t) =>
			t.json()
		)

		// console.log(data)

		const options = {
			key: 'rzp_test_119cJvO3u59nKY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: userData.name,
			description: 'AgroAcers Payment Gateway',
			handler: async function (response) {
				// alert(response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_order_id)
				alert(`Successful Transaction.\nPayment ID: ${response.razorpay_payment_id}`);

                const name = userData.name;
                const mail = userData.email;
                const orderid = response.razorpay_order_id;
                const transid = response.razorpay_payment_id;
                const amountpay = Number(data.amount.toString())/100;
                
                const res =  await fetch("/sendcartReply" ,{
                    method : "POST",
                    headers : { 
                        "content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        name,mail,orderid,transid,amountpay
                    })
                });

                if(res.status === 201){
                    window.alert("Your mail is succesfully sent.");
                }
                else {
                  window.alert("Error occured , try again")
                }

                 // destroy the cookies
                localStorage.removeItem("cartItems");
                navigate("/");
                window.location.reload();
			},
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open();
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
                  AgroAcers Cart
              </div>
              <div className="cartLinkStyle">
                <Link to="/shop">&lt;- Return</Link>
              </div>
              <div className="cart-list">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>PRODUCT</th>
                                <th>PRODUCT NAME</th>
                                <th>PRICE</th>
                                <th>QTY</th>
                                <th>UNIT PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                           cartItems.length === 0 ? <tr><td className="noitems">Cart Is Empty</td></tr> 
                           :
                           cartItems.map((item) => {
                               return(
                                   <>
                                   <tr key={item._id}>
                                        <td onClick={() => removeFromCartHandler(item._id)}><div className="cutitem">x</div></td>
                                        <td><img src={"./../" + item.Imageurl} alt="CartProduct" /></td>
                                        <td  onClick={() => navigatetoproduct(item._id)} className="cartproduct">{item.Name}</td>
                                        <td><span className="hideonsmallcart">Total Price:&nbsp;&nbsp;</span> &#8377; {item.new_price * Number(item.qty)}</td>
                                        <td><span className="hideonsmallcart">Quantity:  &nbsp; &nbsp; </span><select value={item.qty} onChange={ (e) => addToCart(item, e.target.value)}>
                                                {[...Array(item.quantity).keys()].map( x => {
                                                    return(
                                                        <option value={x+1}>{x+1}</option>
                                                    )
                                                })}
                                           </select>
                                        </td>
                                        <td><span className="hideonsmallcart">Unit Price:  &nbsp; &nbsp;</span>&#8377;{item.new_price}</td>
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
                        <input type="text"  placeholder="Voucher code" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => {
                                      setcouponvalue(e.target.value);
                                    }} />
                        <button className="btn btn-success" type="button" id="button-addon2voucher" onClick={HandleVoucher}>Redeem</button>
                    </div>
                    {/* Right Add Cart  */}
                    <div className="mb-3 mt-3 col-md-5">
                        <div className="checkout marginsmall">
                            <p>SubTotal </p>
                            <span>&#8377;{cartItems.reduce( (a, c) => a + c.new_price * c.qty , 0)}</span> 
                        </div>
                        <div className="checkout">
                            <p>Shipping fee</p>
                            <span>&#8377;200</span> 
                        </div>
                        <div className="checkout">
                            <p>Coupon</p>
                            {coupon ? (coupon === "YES") ? <span>Accepted</span> : <span>Incorrect</span> : <span>No</span>} 
                        </div>
                        <hr />
                        <div className="checkout">
                            <h3>GRAND TOTAL </h3>
                            {coupon ? (coupon === "YES") ? <h3>&#8377;{totalPrice-200}</h3> : <h3>&#8377;{totalPrice}</h3> : <h3>&#8377;{totalPrice}</h3>} 
                        </div>
                        <div className="checkout mt-3">
                            <button onClick={displayRazorpay} className="btn btn-success btn-block" disabled={cartItems.length === 0}>Check out</button>
                        </div>
                    </div>
              </div>
          </div>
        </>
    )
}

export default MyCart;
