import  React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Loader from "../Loader";
import "./../../Styles/Agrodashboard.css";
import axios from "axios";

function CropsDashboard(){

    const [DataLoading, setDataLoading] = useState(false);
    const [UserDetail,setUserDetail] = useState([]);
    const [userdata,setuserdata] = useState([]);
    const navigate = useNavigate();

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
            setDataLoading(true);
                
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } 
        catch (err) {
            console.log(err);
            navigate("/login", { replace: true })
        }
    };

    useEffect(() => {
        callAboutPage();

        const fetchdata = async () =>{
            const {data} = await axios.get("/SellCropdata");
            console.log(data);
            setuserdata(data);
        }
        fetchdata();

        window.scroll(0,0);  
    }, [])


    if (!DataLoading){
        return (
            <Loader />
        );
    }

    // console.log(UserDetail)

    return(
        <>
            {!UserDetail.isSubscriber ? 
                <div className="alert alert-danger mb-0" role="alert">
                    Please Subscribe to AgroAcers Shop to Sell &amp; Purchase Crop. &nbsp;<Link to="/SubscriberPlan" className="alert-link">Subscribe Now</Link>
                </div> 
                : 
                null
            }

             {/* Banner of Agro dashboard  */}
            <div className="dash-banner">
                <h1 className="dash-banner-heading">My crop My right</h1>
                <p className="dash-banner-para">
                    Farming looks mighty easy when your plow is a pencil, and you're 
                    a thousand miles from the corn field.The farmers, therefore, 
                    are the founders of human civilization.
                    AgroAcers took the responsibility of securing their rights and give them their true spirit.
                </p>
            </div>

            {/* Data of Users  */}
            <div className="cart mb-5">
              <div className="cartheading">
                  Sell &amp; Purchase Crops
              </div>
                <div>    
                    {
                        userdata.length === 0 ? <div className="text-center m-4 h-75">No Data Found</div> 
                        :
                        <div className="dashboard-card-container">
                            {userdata.map((item) => (
                                <div  className="card" key={item._id}>
                                    <img className="card-img-top imagedashland" src={item.ImageOfCrop} alt="Farmer Land" />
                                    
                                    <div className="card-body dashboard-card-body">
                                        {/* farmer name */}
                                        <h3 className="card-title"><span style={{fontWeight: "700",color: "#77BC3F"}}>Farmer : </span>{item.FarmerName}</h3>

                                        {/* farmer Info  */}
                                        <div className="dashboard-card-inner-body">
                                            <p className="card-text dashboard-card-text marginsmalldash">
                                                <span style={{fontWeight: "700",  color: "#77BC3F"}}>State : </span>{item.State}
                                            </p>
                                            <p className="card-text dashboard-card-text">
                                                <span style={{fontWeight: "700",  color: "#77BC3F"}}>City : </span>{item.city}
                                            </p> 
                                        </div>

                                        <div className="dashboard-card-inner-body">
                                            <p className="card-text  dashboard-card-text marginsmalldash">
                                                <span style={{fontWeight: "700",  color: "#77BC3F"}} >Crop Grown : </span> {item.CropVariety}
                                            </p>
                                            <p className="card-text dashboard-card-text">
                                                <span style={{fontWeight: "700",  color: "#77BC3F"}}>Total Land Area : </span>{item.TotalLandinAcers} Acers
                                            </p>
                                        </div>
                                       
                                        <p className="card-text  dashboard-card-text">
                                            <span style={{fontWeight: "700",  color: "#77BC3F"}}>Expected Harvest Time : </span> {item.HarvestTime}
                                        </p>

                                        <p className="card-text dashboard-card-text">
                                            <span style={{fontWeight: "700",  color: "#77BC3F"}}>Demand Price of Crop : </span>{item.Min_price} Rs.
                                        </p>
      
                                    </div>

                                    <div className="card-body dashboard-card-body-btn ">
                                        <p className="mb-3">
                                            A farm is more than land and crop. Its a family of HERITAGE and FUTURE.
                                            Agroacers helps farmers to get true MSP of their crops.
                                        </p>
                                        <span className="smalldash">
                                            Agroacers helps farmers to get true MSP of their crops.
                                        </span>

                                        <Link to={UserDetail.isSubscriber === false ? "/CropSellDashboard" : "/sellerCrop/" + item._id} className="dashlink">
                                        <button className="btn btn-primary w-100" disabled={UserDetail.isSubscriber === false}>
                                            Buy Now
                                        </button>
                                        </Link>
                                    </div>
                                </div>

                            ))}
                        </div>
                        } 
                </div>
          </div>
        </>
    )
}

export default CropsDashboard;