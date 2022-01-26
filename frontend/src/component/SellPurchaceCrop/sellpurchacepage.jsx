import  React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "../../Styles/sellcropDetail.css";
import Loader from "../Loader";
import axios from "axios";

const SellerPurchace = () => {

  const { id } = useParams();
  const [pagedata,setPagedate] = useState([]);
  const [isLoading,setisLoading] = useState(false);

  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [body, setbody] = useState("");

  
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

    const postmessage = async (e)=>{
      e.preventDefault();

      let Farmername = pagedata.FarmerName;
      let Farmeremail = pagedata.EmailOfFarmer;

      const res =  await fetch("/sendMessagetofarmer" ,{
        method : "POST",
        headers : { 
            "content-Type" : "application/json"
        },
        body : JSON.stringify({
          name,company,body,Farmername,Farmeremail
        })
      });

      const data = await res.json();
      if(res.status === 200){
          window.alert("Your mail is succesfully sent.");
      }
      else {
        window.alert("Error occured , try again")
      }
    }

    if(!isLoading){
      return(
        <Loader />
      )
    }
  else{
    return (
      <>
        <div>
          {/* Heading  */}
          <h1 className="headingofseller">{pagedata.CropVariety}</h1>

          {/* First Data  */}
          <div className="seller-purchace-header-container">
            {/* Image  */}
            <div className="sell-p-image-container">
                  <img src={pagedata.ImageOfCrop} alt="Crop" />

                  {/* Button to send message to Farmer  */}
                  <button type="button" className="btn btn-success" data-toggle="modal" data-target={"#Contactwithfarmer"}>Send Message to Farmer</button>

                  {/* Modal of Button  */}
                  <div className="modal fade" id={"Contactwithfarmer"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                              <h4 className="modal-title" id="exampleModalLabel">Send Message to {pagedata.FarmerName}</h4>
                              <button type="button" className="btn-close text-reset" data-dismiss="modal" aria-label="Close"></button>
                        </div>

                      <div className="modal-body">
                          <form  method="post">

                            <div className="mb-3">
                              <label htmlFor="formGroupExampleInputmodal" className="form-label mt-1">Sender Name</label>
                              <input 
                                  type="text" 
                                  className="form-control" 
                                  id="formGroupExampleInputmodal" 
                                  placeholder="John Smith" 
                                  value={name}
                                  onChange={(e) => setname(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                              <label htmlFor="formGroupExampleInputmodalcomp" className="form-label mt-1">Company Name</label>
                              <input 
                                  type="text" 
                                  className="form-control" 
                                  id="formGroupExampleInputmodalcomp" 
                                  placeholder="Farmers Wealth Foundation" 
                                  value={company}
                                  onChange={(e) => setcompany(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                              <label htmlFor="formGroupExampleInputmodalbody" className="form-label mt-1">Message</label>
                              <textarea 
                                  type="text" 
                                  className="form-control" 
                                  id="formGroupExampleInputmodalcomp" 
                                  placeholder="I'm from xyz company want to deal with you." 
                                  value={body}
                                  onChange={(e) => setbody(e.target.value)}
                                />
                            </div>
        
                              <div classname="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={postmessage}>Send Message</button>
                              </div>
                          </form>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Table of Details */}
            <div className="sell-pur-crop-con">
              <table className="table">
                <tr >
                  <td colSpan={2}>
                    <h2 style={{textAlign:"center"}}>
                      <strong>Details</strong>
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td><strong>Crop Produce : </strong></td>
                  <td>{pagedata.CropVariety}</td>
                </tr>
                <tr>
                  <td><strong>Seed Company Used : </strong></td>
                  <td>{pagedata.SeedUsed}</td>
                </tr>
                <tr>
                  <td><strong>Total Land Farmer <br />&nbsp; Want  to Deal : </strong></td>
                  <td>{pagedata.TotalLandinAcers} Acers</td>
                </tr>
                <tr>
                  <td><strong>Time of Yielding :</strong></td>
                  <td>{pagedata.YieldTime}</td>
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
                  <td><strong>Address of Land :</strong></td>
                  <td>{pagedata.AdressOfLand}</td>
                </tr>
                <tr>
                  <td><strong>Min Price Offer(per Quantal) :</strong></td>
                  <td>{pagedata.Min_price} Rs.</td>
                </tr>
                <tr>
                  <td><strong>Max Price Offer(per Quantal) :</strong></td>
                  <td>{pagedata.Max_price} Rs.</td>
                </tr>
                </table>
            </div>
          </div>

          {/* description of crop  */}
            <div className="sell-pur-dis-container">
              <h2>Description :</h2>
              <p>{pagedata.DescriptionOfCrop}</p>
            </div>

          {/* farmer Info  */}
          <div className="farmer-informaition-container">

            <h2>Farmer Details :</h2>
            <table  className="table table-hover">

              <tr>
                <td><strong>Farmer Name:</strong></td>
                <td>{pagedata.FarmerName}</td>
              </tr>

              <tr>
                <td><strong>Farmer's Father Name:</strong></td>
                <td>{pagedata.FarmerFatherName}</td>
              </tr>

              <tr>
                <td><strong>Contact No :</strong></td>
                <td>{pagedata.ContactNo}</td>
              </tr>

              <tr>
                <td><strong>Farmer's Email :</strong></td>
                <td style={{textTransform: "none"}}>{pagedata.EmailOfFarmer}</td>
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
                <td><strong>Total Land Farmer Have (Acers) :</strong></td>
                <td>{pagedata.TotalLandinAcers} Acers</td>
              </tr>

              <tr>
                <td><strong>Address Of Farmer :</strong></td>
                <td>{pagedata.AdressOfFarmer}</td>
              </tr>

              <tr>
                <td><strong>Address Of Land :</strong></td>
                <td>{pagedata.AdressOfLand}</td>
              </tr>

              <tr>
                  <td><strong>Expected Harvest Time :</strong></td>
                  <td>{pagedata.HarvestTime}</td>
                </tr>
            </table>

          </div>

            {/* Bid Rate  */}
            <div className="bidding">
                <h3><span><strong>Bidding Amount :</strong></span> {bidvalue||pagedata.Min_price} Rs.</h3>

                <div className="biddingrating">
                  <span style={{marginLeft: "0px"}}>Min Price Offer(Per Quantal) : {pagedata.Min_price} Rs.</span> 
                      <input type="range" min={pagedata.Min_price} max={pagedata.Max_price} name="BidValue" onChange={HandleBid}  id="BidValue" /> 
                  <span>Max Price Offer(Per Quantal) : {pagedata.Max_price} Rs.</span>
                </div>

                <button className="btn btn-success">Bid Your Price</button>
            </div>
        </div>
      </>
    );
  }
};
export default SellerPurchace;
