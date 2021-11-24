import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../Styles/contactus.css";
import farmerImage from "../../Images/New Img/farmer.jpg";

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
           <div className={"ContactBanner"}>
                <h1 className="form-heading">Please get in touch<br /> and our expert support<br /> team will answer all<br /> your questions.</h1>
           </div>
            <div className="container-inner-contact">
                  <div>
                      <div className="col-md-12 container-img-add">
                          <img className="farmer-image" src={farmerImage} alt="farmer" />
                          <div className="farmer-address" >
                              <h5>Office Address/Postal Address</h5>
                              <p>
                                  Office of CEO, AgroAcers<br />
                                  3rd Floor, Room no-3015<br />
                                  Anand Vihar, 6, CGO Complex<br />
                                  Lodhi Road, New Delhi, <br />
                                  India<br />
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="container-form">
                        <h3 className="contactus-form-heading">Send us your Query</h3>
                        <form>
                            {/* Name  */}
                            <div class="m-2">
                                <label for="NameI" class="form-label">Name</label>
                                <input type="text" class="form-control" id="NameI" placeholder="John Smith" />
                            </div>
                            {/* Email  */}
                            <div class="m-2">
                                <label for="emailInput" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" />
                            </div>
                            {/* Phone No  */}
                            <div class="m-2">
                                <label for="PhoneInput" class="form-label">Phone No.</label>
                                <input type="number" class="form-control" id="PhoneInput" placeholder="" min="0"/>
                            </div>
                            {/* Subject  */}
                            <div class="m-2">
                              <label for="SubInput" class="form-label">Subject</label>
                              <input type="text" class="form-control" id="SubInput" placeholder="Title" />
                            </div>
                            {/* Text  */}
                            <div class="m-2">
                                <label for="exampleFormControlTextarea1" class="form-label">Write Your Query: </label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            {/* Submit  */}
                            <div class="m-3 ">
                                <button type="submit" class="btn btn-success btn-color form-control">Submit</button>
                            </div>
                        </form>
                  </div>
            </div>
        </div>
      </>
    );
  }
}
export default ContactPage;
