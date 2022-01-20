import { useState } from "react";

const FarmerCropDetail = () => {
  const [farmerDetail, serFarmerDetail] = useState({
    FarmerName: "",
    FarmerFatherName: "",
    EmailOfFarmer: "",
    ContactNo: "",
    city: "",
    Pincode: "",
    AdressOfFarmer: "",
    AdressOfLand: "",
    TotalLandinAcers: "",
    CropVariety: "",
    SeedUsed: "",
    DescriptionOfCrop: "",
    YieldTime:"",
    HarvestTime: "",
    Min_price: "",
    Max_price: "",
  });
  let nameo,valueo;
 const handleChange = (e)=>{
   console.log(e.target.name);
  nameo = e.taget.name;
  valueo = e.target.value;
  serFarmerDetail({...farmerDetail,[nameo]:valueo})
 }
  const CropForm = () => {
    return (
      <>
        <form>
          <div className="Crop-form-container">
            <div className="Crop-Form-header">Form</div>
            <label htmlFor="Farmer_name">
              {" "}
              Name Of Farmer : <br></br>
              <input
                type="text"
                name="FarmerName"
                className="Name_of_farmer"
                id="Farmer_name"
                value={farmerDetail.FarmerName}
                onChange={handleChange}
              />
            </label>{" "}
            <br />
            <label htmlFor="Farmer-father-name">
              Father Name : <br />
              <input
                name="FarmerFatherName"
                type="text"
                className="Name_of_farmer_father"
                id="Farmer-father-name"
              />
            </label>{" "}
            <br />
            <label htmlFor="EmailOfFarmer">
              Email id :<br />
              <input
                name="EmailOfFarmer"
                type="email"
                className="EmailOfFarmer"
                id="EmailOfFarmer"
              />
            </label>{" "}
            <br />
            <label htmlFor="ContactNo">
              {" "}
              Contact No : <br />
              <input
                name="ContactNo"
                type="number"
                className="ContactNo"
                id="ContactNo"
              />
            </label>{" "}
            <br />
            <label htmlFor="Gender">
              {" "}
              Gender : <br />
              <select id="Gender" name="Gender">
                <option selected value="saab">
                  male
                </option>
                <option value="mercedes">female</option>
                <option value="audi">other</option>
              </select>
            </label>{" "}
            <br />
            <label htmlFor="city">
              {" "}
              City/Village : <br />
              <input name="city" type="text" className="city" id="city" />
            </label>{" "}
            <br />
            <label htmlFor="State">State:</label> <br />
            <select id="State" name="State">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            <br />
            <label htmlFor="Pincode">
              Pincode : <br />
              <input
                name="Pincode"
                type="number"
                className="Pincode"
                id="Pincode"
              />
            </label>{" "}
            <br />
            <label htmlFor="AdressOfFarmer">
              Adress Of Farmer : <br />
              <textarea
                name="AdressOfFarmer"
                className="AdressOfFarmer"
                id="AdressOfFarmer"
              ></textarea>
            </label>{" "}
            <br />
            <label htmlFor="AdressOfLand">
              Adress Of Land : <br />
              <textarea
                name="AdressOfLand"
                className="AdressOfLand"
                id="AdressOfLand"
              ></textarea>
            </label>{" "}
            <br />
            <label htmlFor="TotalLandinAcers">
              Total Land Farver Have In Acers : <br />
              <input
                name="TotalLandinAcers"
                type="number"
                className="TotalLandinAcers"
                id="TotalLandinAcers"
              />
            </label>{" "}
            <br />
            <label htmlFor="CropVariety">
              Variety Of Crop : <br />
              <input
                name="CropVariety"
                type="text"
                className="CropVariety"
                id="CropVariety"
              />
            </label>{" "}
            <br />
            <label htmlFor="SeedUsed">
              {" "}
              Seed Used : <br />
              <input
                name="SeedUsed"
                type="text"
                className="SeedUsed"
                id="SeedUsed"
              />
            </label>{" "}
            <br />
            <label htmlFor="DescriptionOfCrop">
              Description about Crop : <br />
              <textarea
                name="DescriptionOfCrop"
                className="DescriptionOfCrop"
                id="DescriptionOfCrop"
              ></textarea>
            </label>{" "}
            <br />
            <label htmlFor="YieldTime">
              Yield Time :
              <input
                type="date"
                className="YieldTime"
                name="YieldTime"
                id="YieldTime"
              />
            </label>{" "}
            <br />
            <label htmlFor="HarvestTime">
              Harvest Time (expected time) : <br />
              <input
                type="date"
                className="HarvestTime"
                name="HarvestTime"
                id="HarvestTime"
              />
            </label>{" "}
            <br />
            <label htmlFor="ImageOfCrop">
              Image Of Crop : <br />
              <input
                type="file"
                className="ImageOfCrop"
                name="ImageOfCrop"
                id="ImageOfCrop"
              />
            </label>{" "}
            <br />
            <label htmlFor="Min_price">
              Minimum price of Crop : <br />
              <input
                name="Min_price"
                type="number"
                className="Min_price"
                id="Min_price"
              />
            </label>{" "}
            <br />
            <label htmlFor="Max_price">
              Maximum Price of crop : <br />
              <input
                name="Max_price"
                type="number"
                className="Max_price"
                id="Max_price"
              />
            </label>{" "}
            <br />
            <input type="submit" name="Submit" />
          </div>
        </form>
      </>
    );
  };
  return (
    <>
      <CropForm />
    </>
  );
};
export default FarmerCropDetail;
