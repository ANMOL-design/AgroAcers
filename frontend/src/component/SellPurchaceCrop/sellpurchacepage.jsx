import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../Styles/sellcropDetail.css";
import Loader from "../Loader";
import axios from "axios";
const SellerPurchace = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pagedata, setPagedate] = useState([]);
  const [userData, setuserData] = useState([]);
  const [sendbid, setsendbid] = useState({
    nameOfOrg: "",
    emailoforg: "",
    contactoforg: "",
    intrestoforg: "",
  });
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      if (id) {
        const { data } = await axios.get("/sellerCrop/" + id);
        setPagedate(data);
        setisLoading(true);
      }
    };
    fetchdata();
    window.scroll(0, 0);
  }, [id]);
  useEffect(() => {
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
        setuserData(data);

        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };
    callAboutPage();
  }, []);
  const [bidvalue, setbidvalue] = useState(pagedata.Min_price);

  const HandleBid = (e) => {
    setbidvalue(e.target.value);
  };
  let name, value;
  const handlebidInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setsendbid({ ...sendbid, [name]: value });
    console.log(sendbid);
  };
  const postBid = async (e) => {
    e.preventDefault();
    const { nameOfOrg, emailoforg, contactoforg, intrestoforg , } = sendbid;
    const cropname = pagedata.CropVariety;
    const farmername = pagedata.FarmerName;
    const bidprice = bidvalue;
    const farmeremail = pagedata.EmailOfFarmer;
    const UserId = userData._id
    const res = await fetch("/sendbid", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        nameOfOrg,
        emailoforg,
        contactoforg,
        intrestoforg,
        cropname,
        farmername,
        bidprice,
        farmeremail,
        UserId
      }),
    });
    const data = await res.json();
    if (res.status === 201) {
      window.alert("Your bid is succesfully sent.");
      navigate("/CropSellDashboard");
      window.location.reload()
    } else if (res.status === 500) {
      window.alert("Filled are required to fill");
    } else {
      window.alert("Error occured , try again");
    }
  };
  if (!isLoading) {
    return <Loader />;
  } else {
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
              <button className="btn btn-success">
                Send Message to Farmer
              </button>
            </div>

            {/* Table of Details */}
            <div className="sell-pur-crop-con">
              <table className="table">
                <tr>
                  <td colSpan={2}>
                    <h2 style={{ textAlign: "center" }}>
                      <strong>Details</strong>
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Crop Produce : </strong>
                  </td>
                  <td>{pagedata.CropVariety}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Seed Company Used : </strong>
                  </td>
                  <td>{pagedata.SeedUsed}</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Total Land Farmer <br />
                      &nbsp; Want to Deal :{" "}
                    </strong>
                  </td>
                  <td>{pagedata.TotalLandinAcers} Acers</td>
                </tr>
                <tr>
                  <td>
                    <strong>Time of Yielding :</strong>
                  </td>
                  <td>{pagedata.YieldTime}</td>
                </tr>
                <tr>
                  <td>
                    <strong>State :</strong>
                  </td>
                  <td>{pagedata.State}</td>
                </tr>
                <tr>
                  <td>
                    <strong>City :</strong>
                  </td>
                  <td>{pagedata.city}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Address of Land :</strong>
                  </td>
                  <td>{pagedata.AdressOfLand}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Min Price Offer(per Quantal) :</strong>
                  </td>
                  <td>{pagedata.Min_price} Rs.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Max Price Offer(per Quantal) :</strong>
                  </td>
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
            <table className="table table-hover">
              <tr>
                <td>
                  <strong>Farmer Name:</strong>
                </td>
                <td>{pagedata.FarmerName}</td>
              </tr>

              <tr>
                <td>
                  <strong>Farmer's Father Name:</strong>
                </td>
                <td>{pagedata.FarmerFatherName}</td>
              </tr>

              <tr>
                <td>
                  <strong>Contact No :</strong>
                </td>
                <td>{pagedata.ContactNo}</td>
              </tr>

              <tr>
                <td>
                  <strong>Farmer's Email :</strong>
                </td>
                <td style={{ textTransform: "none" }}>
                  {pagedata.EmailOfFarmer}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>State :</strong>
                </td>
                <td>{pagedata.State}</td>
              </tr>

              <tr>
                <td>
                  <strong>City/Village :</strong>
                </td>
                <td>{pagedata.city}</td>
              </tr>

              <tr>
                <td>
                  <strong>Total Land Farmer Have (Acers) :</strong>
                </td>
                <td>{pagedata.TotalLandinAcers} Acers</td>
              </tr>

              <tr>
                <td>
                  <strong>Address Of Farmer :</strong>
                </td>
                <td>{pagedata.AdressOfFarmer}</td>
              </tr>

              <tr>
                <td>
                  <strong>Address Of Land :</strong>
                </td>
                <td>{pagedata.AdressOfLand}</td>
              </tr>

              <tr>
                <td>
                  <strong>Expected Harvest Time :</strong>
                </td>
                <td>{pagedata.HarvestTime}</td>
              </tr>
            </table>
          </div>

          {/* Bid Rate  */}
          <div className="bidding">
            <h3>
              <span>
                <strong>Bidding Amount :</strong>
              </span>{" "}
              {bidvalue || "Set your Bid value in "} Rs.
            </h3>

            <div className="biddingrating">
              <span style={{ marginLeft: "0px" }}>
                Min Price Offer(Per Quantal) : {pagedata.Min_price} Rs.
              </span>
              <input
                type="range"
                min={pagedata.Min_price}
                max={pagedata.Max_price}
                name="BidValue"
                onChange={HandleBid}
                id="BidValue"
                defaultValue={pagedata.Min_price}
              />
              <span>
                Max Price Offer(Per Quantal) : {pagedata.Max_price} Rs.
              </span>
            </div>

            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Bid your Price
            </button>

            <div
              class="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <form method="post">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        style={{ color: "#77BC18", fontSize: "32px" }}
                        class="modal-title"
                        id="exampleModalLabel"
                      >
                        Bid your Ammount to deal with farmer
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p style={{ color: "#77BC3F", fontSize: "32px" }}>
                        <strong>Yout Bidding Ammount : </strong>
                        {bidvalue}
                      </p>
                      <div className="bid-form-container">
                        <label htmlFor="nameOfOrg">
                          Name Of Organization :
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          required
                          style={{ width: "90%" }}
                          name="nameOfOrg"
                          value={sendbid.nameOfOrg}
                          onChange={handlebidInput}
                          placeholder="enter the name or company or Organisation"
                          id="nameOfOrg"
                        />
                        <br />
                        <label htmlFor="emailoforg">
                          Email of Organization :
                        </label>{" "}
                        <br />
                        <input
                          type="email"
                          required
                          style={{ width: "90%" }}
                          name="emailoforg"
                          value={sendbid.emailoforg}
                          onChange={handlebidInput}
                          placeholder="organiztion@gmail.com"
                          id="emailoforg"
                        />{" "}
                        <br />
                        <label htmlFor="contactnooforg">Contact no :</label>
                        <br />
                        <input
                          type="number"
                          required
                          style={{ width: "90%" }}
                          name="contactoforg"
                          value={sendbid.contactoforg}
                          onChange={handlebidInput}
                          id="contactnooforg"
                          placeholder="Contact of Organization"
                        />
                        <br />
                        <label htmlFor="intrestoforg">
                          Why you want to Buy this Crop ?
                        </label>
                        <br />
                        <textarea
                          name="intrestoforg"
                          required
                          style={{ width: "90%" }}
                          id="intrestoforg"
                          value={sendbid.intrestoforg}
                          onChange={handlebidInput}
                          placeholder="Write the intrest about crop you want to buy"
                          cols="30"
                          rows="3"
                        ></textarea>
                        <br />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <input
                        type="submit"
                        onClick={postBid}
                        class="btn btn-primary"
                        value="Send your Bid"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default SellerPurchace;
