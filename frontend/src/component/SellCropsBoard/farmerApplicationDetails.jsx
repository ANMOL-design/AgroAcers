import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import Login from "../auth/login/Login";
const FarmerBiddingInfo = ()=>{
    const { state, dispatch } = useContext(UserContext);
    const [farmerApplication,setFarmerApplication] = useState({});
    const {id} = useParams();
    const FarmerApplicationData = async () => {
        try {
          const res = await fetch("/CropSellDashboard/myApplication/"+id, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
    
          const data = await res.json();
          setFarmerApplication(data);
    
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
          FarmerApplicationData()
      
      }, []);
      console.log(farmerApplication);
    if(!state){
    return(
        <>
        <Login/>
        </>
    )
}
else{
    return(
        <>
        <div className="application-info-containe">
           <h2>Application Info</h2> 
           <div className="Info-card">
             <h2>{farmerApplication.CropVariety}</h2>
              <h3>{farmerApplication._id}</h3>
               <img src={farmerApplication.ImageOfCrop} />
               </div>
            </div>
        </>
    )
}

}
export default FarmerBiddingInfo;