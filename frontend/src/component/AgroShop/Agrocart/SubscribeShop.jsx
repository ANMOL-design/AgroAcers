import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./../../../Styles/addUniversity.css"

const SubscribeToShop = ()=>{

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const handleSubmitbtn = () => {
        var element = document.getElementById("invalidCheck")
        var submit = document.getElementById("submitsub")
        if(element.value){
           if(submit){
                submit.disabled = false;
           }
        }
    }
   
    return(
        <>
          <div className="container-fluid">
                <div style={{fontSize: '3rem', color: '#77bc3f'}} className="m-3 mb-4 text-decoration-underline text-center">
                    <h1>Subscribe To AgroAcers Shop</h1>
                </div>
                <div className="container-fluid" style={{border: "1px solid #c0c0c0", padding: "5px 1.5%", borderRadius: "5px"}}>
                    <form className="row g-3 p-2 needs-validation">
                        <div className="col-md-4">
                            <label for="validationCustom01" class="form-label">First name</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Firstname" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="validationCustom02" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="Lastname" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="agroacers@gmail.com" id="inputEmail4" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputNumber" className="form-label">Phone</label>
                            <input type="number" className="form-control" placeholder="+91-7852671434" id="inputNumber" min={0} />
                        </div>
                        <div className="col-md-4">
                            <label for="inputNumberadd" className="form-label">Aadhar Number</label>
                            <input type="number" className="form-control" placeholder="XXXX" id="inputNumberadd" min={0} />
                        </div>
                        <div className="col-md-4">
                            <label for="validationCustomgender" className="form-label">Gender</label>
                            <select className="form-select" id="validationCustomgender" required>
                                <option selected disabled value="">Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="col-md-6 mt-1">
                            <label for="validationCustom03" className="form-label">City</label>
                            <input type="text" className="form-control" id="validationCustom03" required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom04" className="form-label">State</label>
                            <select className="form-select" id="validationCustom04" required>
                                <option selected disabled value="">Choose...</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
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
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom05" className="form-label ">Zip</label>
                            <input type="text" className="form-control" id="validationCustom05" required />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label mt-1">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="27 Main Steet, Delhi" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" class="form-label mt-1">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label for="BANKACCOUNTNUMBER" className="form-label mt-1">Bank Account Number</label>
                            <input type="number" className="form-control" id="BANKACCOUNTNUMBER" />
                        </div>
                        <div className="col-md-6">
                            <label for="IFSCCODE" class="form-label mt-1">Bank IFSC CODE</label>
                            <input type="text" className="form-control" id="IFSCCODE" />
                        </div>
                        <div className="col-md-12 mt-1">
                            <label for="whyjoin" class="form-label mb-1 mt-4">Why you want to be Part of AgroAcers ?</label><br />
                            <textarea className="form-control" aria-label="With textarea" id="whyjoin"></textarea>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="true" id="invalidCheck" onClick={handleSubmitbtn} required />
                                <span className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions &nbsp;&nbsp;&nbsp;
                                    <Link to="/PrivacyPolicy">(AgroAcers Policy)</Link>
                                </span>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 d-grid gap-2 mt-4 mb-5">
                            <button className="btn btn-success" type="submit" id="submitsub" data-bs-toggle="modal" data-bs-target="#exampleModalSubmit" disabled>Submit form</button>

                            <div className="modal fade" id="exampleModalSubmit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">AgroAcers Subscription</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>
                                                Congratulations to be part AgroAcers Shop.🎉🎉🎉
                                                Our Team will reach out you soon and will tell you about further procedure. 
                                                <br />Please Stay connected.
                                            </p>
                                        </div>
                                        <div className="modal-footer">
                                            <Link to="/"><button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>      
                </div>
          </div>
        </>
    );
    }
export default SubscribeToShop;;