import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../Styles/sellcropDetail.css"
import Loader from "../Loader";

const SellerPurchace = () => {
  const { id } = useParams();
  const [pagedata,setPagedate] = useState([]);
  const [isLoading,setisLoading] = useState(false)
  
  useEffect(() => {
    const fetchdata = async () =>{
        if(id){
            const {data} = await axios.get("/sellerCrop/" + id);
             setPagedate(data);
             setisLoading(true)
        }
    }
    fetchdata();
    window.scroll(0,0);
    
}, [id]);
const [bidvalue,setbidvalue] = useState(pagedata.Min_price);
const HandleBid =(e)=>{
setbidvalue(e.target.value)
}
if(!isLoading){
  return(
    <Loader />
  )
}
else{
  return (
    <>
      <div className="seller-purchace-container">
        <h1 style={{textAlign:"center",fontSize:"72px",color:"#77BC3F"}}>{pagedata.CropVariety}</h1>
      {console.log(pagedata)}
      <div className="seller-purchace-header-container">
        <div className="sell-p-image-container">
          <img src={pagedata.ImageOfCrop} alt="" />
          <br />
         <button className="btn btn-success">Send Message to Farmer</button>
        </div>
       
        <div className="sell-pur-crop-con">
          <table>
            <tr >
              <td colSpan={2}>
              <h2 style={{textAlign:"center"}}>
              <strong>Details</strong>
              </h2>
              </td>
            </tr>
            <tr>
              <td><strong>Crop type : </strong></td>
              <td>{pagedata.CropVariety}</td>
            </tr>
            <tr>
              <td><strong>Seed Used : </strong></td>
              <td>{pagedata.SeedUsed}</td>
            </tr>
            <tr>
              <td><strong>Total Land Farmer <br /> Want  to Deal : </strong></td>
              <td>{pagedata.TotalLandinAcers}</td>
            </tr>
            <tr>
              <td><strong>Time of Yielding :</strong></td>
              <td>{pagedata.YieldTime}</td>
            </tr>
          
            <tr>
              <td><strong>Adress of land :</strong></td>
              <td>{pagedata.AdressOfLand}</td>
            </tr>
            <tr>
              <td><strong>State :</strong></td>
              <td>{pagedata.State}</td>
            </tr>
            <tr>
              <td><strong>City :</strong></td>
              <td>{pagedata.city}</td>
            </tr>
            <tr>
              <td><strong>Min Price Offer(per Quantal) :</strong></td>
              <td>{pagedata.Min_price}</td>
            </tr>
            <tr>
              <td><strong>Max Price Offer(per Quantal) :</strong></td>
              <td>{pagedata.Max_price}</td>
            </tr>
            </table>
        </div>
      </div>
      <div className="sell-pur-dis-container">
        <hr />
        <h2>Description :</h2>
        <p>{pagedata.DescriptionOfCrop}</p>
      </div>
      <div className="farmer-informaition-container">
        <hr />
        <h2>Farmer Details</h2>
        <table>
          <tr>
            <td><strong>Farmer Name:</strong></td>
            <td>{pagedata.FarmerName}</td>
          </tr>
          <tr>
            <td><strong> Father Name:</strong></td>
            <td>{pagedata.FarmerFatherName}</td>
          </tr>
          <tr>
            <td><strong> Contact No :</strong></td>
            <td>{pagedata.ContactNo}</td>
          </tr>
          <tr>
            <td><strong> Email :</strong></td>
            <td>{pagedata.EmailOfFarmer}</td>
          </tr>
          <tr>
            <td><strong>State :</strong></td>
            <td>{pagedata.State}</td>
          </tr>
          <tr>
            <td><strong>City/Village :</strong></td>
            <td>{pagedata.city}</td>
          </tr>
          <tr>
            <td><strong>Total Land Farmer Have(Acers) :</strong></td>
            <td>{pagedata.TotalLandinAcers}</td>
          </tr>
          <tr>
            <td><strong>Adress Of Farmer :</strong></td>
            <td>{pagedata.AdressOfFarmer}</td>
          </tr>
        </table>
        <hr />
      </div>
      <div className="bidding-container">
        <h3><span><strong>Bidding Amount :</strong></span><span>{bidvalue||pagedata.Min_price}</span></h3>
       <span>Min Price({pagedata.Min_price})</span> <input type="range" min={pagedata.Min_price} max={pagedata.Max_price} name="BidValue" onChange={HandleBid}  id="BidValue" />max Price(<span>{pagedata.Max_price})</span>
       <button className="btn btn-success">Bid Your Price</button>
      </div>
      </div>
    </>
  );
}
};
export default SellerPurchace;
