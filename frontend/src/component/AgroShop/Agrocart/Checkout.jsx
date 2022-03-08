import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./../../../Styles/checkout.css";
import Loader from '../../Loader';


function Checkoutshop(){

    const navigate = useNavigate();
    const [userData, setuserData] = useState({});
    const [DataLoading, setDataLoading] = useState(false);
    const [myid, setmyid] = useState("");

    const [useritem,setuseritem] = useState({
        firstname:"",lastname:"",city:"",AdressOfBuyer:"",Pincode:""
    })

    console.log(useritem);

    let name , value;
    const  handleInput = async (e)=>{
        name = e.target.name;
        value = e.target.value;
        setuseritem({...useritem , [name]:value})
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
                
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

            setuserData(data);
        } 
        catch (err) {
            console.log(err);
            navigate("/login", { replace: true })
        }
    };

    useEffect(() => {
        callAboutPage();

        window.scroll(0,0);
        setDataLoading(true);
    }, []);

    const HandleReturn = () => {
        navigate("/cart", { replace: true })
    }

    const postData = async ()=>{

        const {firstname, lastname ,city ,AdressOfBuyer ,Pincode } = useritem;

        let today  = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yy =today.getFullYear();
        let hh = today.getHours();
        let mi = today.getMinutes();
        let ss = today.getSeconds();
        let time = dd+"/"+mm+"/"+yy+"("+hh+":"+mi+":"+ss+")";

        const EmailofBuyer = userData.email;
        const BuyerName = firstname + " " + lastname;

        const res =  await fetch("/sendcheckoutdatabasic" ,{
            method : "POST",
            headers : { 
                "content-Type" : "application/json"
            },
            body : JSON.stringify({
                BuyerName, EmailofBuyer ,city ,AdressOfBuyer ,Pincode, time
            })
        })
        
        const data = await res.json();
        console.log(data)
        setmyid(data._id);
    
        if(res.status === 200){
            window.alert("Successful Update data.");
        }
        else{
            console.log(res)
            window.alert("Fails to put data, Try again")
        }

    }

    const payment = async () => {
        const _id = "62263590f44022fe89ae4919"
        const Nameofproduct = "Potato Seeds"
        const _idofproduct = "82717"
        const qtyofproduct = 12
        const priceofproduct = 50

        const res =  await fetch("/sendcheckoutdata" ,{
            method : "POST",
            headers : { 
                "content-Type" : "application/json"
            },
            body : JSON.stringify({
                _id, Nameofproduct ,_idofproduct ,qtyofproduct ,priceofproduct
            })
        })

        const data = await res.json();
        console.log(data)
    
        if(res.status === 200){
            window.alert("Successful Added.");
        }
        else{
            console.log(res)
            window.alert("Fails to put data, Try again")
        }

    }

    if (!DataLoading){
        return (
            <Loader />
        );
    }

    return(
        <>
            <div className="row mt-3 mx-3">
                {/* First Side  */}
                <div className="col-md-3">
                    {/* Text  */}
                    <div style={{marginTop: "50px", marginLeft: "10px"}} className="text-center">
                        <h3 className="mt-3">Welcome</h3>
                        <p>You are few steps away from completing your order!</p>
                    </div>
                    <div style={{marginTop: "50px", marginLeft: "10px"}} className="text-center">
                        <h3 className="mt-3">Order Bill !</h3>
                        <h4 className="mt-3 stylebill">1000 Rs.</h4>
                    </div>
                    {/* Back Button  */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-white btn-rounded back-button" onClick={HandleReturn}>Go back</button>
                    </div>            
                </div>

                <div className="col-md-9 justify-content-center">
                    <div className="card-custom mb-4">
                        <div className="mt-0 mx-5">
                            <div className="text-center mb-3 pb-2 mt-3">
                                <h3 style={{color: "#495057"}}>Delivery Details</h3>
                            </div>
                    
                            <form className="mb-0" style={{margin: "5px 10px"}}>
                    
                                <div className="row mb-3 smallscreenactiveform">
                                    {/* First Name  */}
                                <div className="col">
                                    <div className="form-outline">
                                    <input type="text" id="form9Example1" name="firstname" value={useritem.firstname}  onChange={handleInput}  className="form-control input-custom" />
                                    <label className="form-label checkoutlabel" htmlFor="form9Example1">First name</label>
                                    </div>
                                </div>
                                    {/* last Name  */}
                                <div className="col">
                                    <div className="form-outline">
                                    <input type="text" id="form9Example2" name="lastname" value={useritem.lastname}  onChange={handleInput} className="form-control input-custom" required/>
                                    <label className="form-label checkoutlabel" htmlFor="form9Example2">Last name</label>
                                    </div>
                                </div>
                                </div>

                                <div className="row mb-3 smallscreenactiveform">
                                    {/* Email  */}
                                <div className="col">
                                    <div className="form-outline">
                                    <input type="email" id="typeEmail" value={userData.email} className="form-control input-custom" disabled/>
                                    <label className="form-label checkoutlabel" htmlFor="typeEmail">Email</label>
                                    </div>
                                </div>
                                    {/* City  */}
                                <div className="col">
                                    <div className="form-outline">
                                    <input type="text" id="form9Example3" name="city" value={useritem.city}  onChange={handleInput} className="form-control input-custom" />
                                    <label className="form-label checkoutlabel" htmlFor="form9Example3">City</label>
                                    </div>
                                </div>
                                </div>
                                <div className="row mb-3 smallscreenactiveform">
                                    {/* Address  */}
                                <div className="col">
                                    <div className="form-outline">
                                    <input type="text" id="form9Example6" name="AdressOfBuyer" value={useritem.AdressOfBuyer}  onChange={handleInput} className="form-control input-custom" />
                                    <label className="form-label checkoutlabel" htmlFor="form9Example6">Address</label>
                                    </div>
                                </div>
                                    {/* Zip code  */}
                                <div className="col">
                                    <div className="form-outline">
                                    <input type="number" min={0} id="form9Example4" name="Pincode" value={useritem.Pincode}  onChange={handleInput} className="form-control input-custom" />
                                    <label className="form-label checkoutlabel" htmlFor="form9Example4">Zip</label>
                                    </div>
                                </div>
                               
                                </div>
                    
                             
                                {/* <!-- Submit button --> */}
                                <button type="button" onClick={postData} className="btn btn-primary btn-rounded mx-4"
                                    style={{backgroundColor: '#0062CC'}}>Proceed to Pay
                                </button>

                                <button type="button" onClick={payment} className="btn btn-primary btn-rounded mx-4"
                                    style={{backgroundColor: '#0062CC'}}>Payment
                                </button>
                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}

export default Checkoutshop;