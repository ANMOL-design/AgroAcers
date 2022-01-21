import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import "../../Styles/subscriberplan.css"
import Login from "../auth/login/Login";
const SubscriberPlan = ()=>{
     const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [pricepay,setPricePay] = useState("");
    const [UserDetail,setUserDetail] = useState([]);
 
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
          setUserDetail(data);
    
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
        } catch (err) {
          console.log(err);
        }
      };
    
    useEffect(()=>{
        callAboutPage();
    },[])
   
     const displayRazorpay=async (e)=> {
         let totalPrice =e.target.value;
        setPricePay(totalPrice);

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
			name: "amandeep",
			description: 'AgroAcers Payment Gateway',
			handler: async function (response) {
				// alert(response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_order_id)
				alert(`Successful Transaction.\nPayment ID: ${response.razorpay_payment_id}`);
                
                const name = UserDetail.name;
                const mail = UserDetail.email;
                const UserId = UserDetail._id;
                const orderid = response.razorpay_order_id;
                const transid = response.razorpay_payment_id;
                const amountpay = Number(data.amount.toString())/100;
                const res =  await fetch("/sendSubscription" ,{
                    method : "POST",
                    headers : { 
                        "content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        name,mail,orderid,transid,amountpay,UserId
                    })
                });
                navigate("/");
                if(res.status === 201){
                    window.alert("Your mail is succesfully sent.");
                }
                else {
                  window.alert("Error occured , try again")
                }

              
               
			},
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open();
	}

  
    const Subscribercard = ()=>{

  if(UserDetail.isSubscriber === true && state){
        return(
          <>
          <h1>You are Already Subscriber of agroacers</h1>
          </>
        )
      }
      else if(UserDetail.isSubscriber===false){
        return(
            <>
            <div className="pricing8 py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h3 className="mb-3">Pricing to make your Work Effective</h3>
        <h6 className="subtitle font-weight-normal">We offer 100% satisafaction and Money back Guarantee</h6>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-4 ml-auto pricing-box align-self-center">
        <div className="card mb-4">
          <div className="card-body p-4 text-center">
            <h5 className="font-weight-normal">Regular Plan</h5>
            <span className="text-dark display-5">99 ₹</span>
            <h6 className="font-weight-light font-14">Monthly</h6>
            <p className="mt-4">The Master license allows you to Bid on your Favourite crop unlimited till 1 months and enjoy a realible communication with farmer</p>
          </div>
          <button className="btn  btn-info-gradiant p-3 btn-block border-0 text-white"  onClick={displayRazorpay} value="99"  >CHOOSE PLAN </button>
        </div>
      </div>
      <div className="col-md-4 ml-auto pricing-box align-self-center">
        <div className="card mb-4">
          <div className="card-body p-4 text-center">
            <h5 className="font-weight-normal">Master Plan</h5>
             <span className="text-dark display-5">249 ₹</span>
            <h6 className="font-weight-light font-14">6 Months</h6>
            <p className="mt-4">The Master license allows you to Bid on your Favourite crop unlimited till 6 months and enjoy a realible communication with farmer</p>
          </div>
          <button className="btn btn-info-gradiant p-3 btn-block border-0 text-white"  onClick={displayRazorpay} value="249"  >CHOOSE PLAN </button>
        </div>
      </div>
      <div className="col-md-4 ml-auto pricing-box align-self-center">
        <div className="card mb-4">
          <div className="card-body p-4 text-center">
            <h5 className="font-weight-normal">Premium Plan</h5>
            <span className="text-dark display-5">499 ₹</span>
            <h6 className="font-weight-light font-14">YEARLY</h6>
            <p className="mt-4">The Master license allows you to Bid on your Favourite crop unlimited till yearly and enjoy a realible communication with farmer</p>
          </div>
          <button className="btn btn-info-gradiant p-3 btn-block border-0 text-white"  onClick={displayRazorpay} value="499"  >CHOOSE PLAN </button>
        </div>
      </div>
    </div>
  </div>
</div>
            </>
        )
      
      }
      else{
        return(
          <Login/>
        )
      }
    
    }
    return(
        <>
        <Subscribercard />
        </>
    )
}
export default SubscriberPlan;