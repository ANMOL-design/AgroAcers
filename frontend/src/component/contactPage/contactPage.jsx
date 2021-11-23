import React from "react";
import BannerImage from "../../Images/crousal/image-5.jpg";
// import BannerImage from "../../Images/crousal/11.jfif";
import "bootstrap/dist/css/bootstrap.css";
import "../../Styles/contactus.css";
import farmerImage from "../../Images/New Img/farmer.jpg";
class ContactPage extends React.Component {
  render() {
    return (
      <>
        <div className="contact-page-container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 img-fluid"
                  src={BannerImage}
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="contat-us-card-text">Contact Us</h1>
                  <p className="contat-us-card-para">
                    if you have any query related to farming send us query our
                    expert team resolve your query soon
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contactus-form-container">
            <h3 className="contactus-form-heading">Send us Query</h3>
            <form className="contactus-form">
              <label htmlFor="name">name :</label>
              <input type="text" name="name" id="name" /> <br />
              <label htmlFor="name">Email :</label>
              <input type="email" name="email" id="email" /> <br />
              <label htmlFor="phonenumber">Phone no :</label>
              <input type="number" name="phonenumber" id="phonenumber" /> <br />
              <label htmlFor="subject">Subject :</label>
              <input type="text" name="subject" id="subject" /> <br />
              <label htmlFor="query">Write your query :</label>
              <textarea typeof="text" id="query" rows="3" /> <br />
              <input type="submit" id="submit-btn" />
            </form>
            <img className="farmer-image" src={farmerImage} alt="farmer" />
          </div>
        </div>
      </>
    );
  }
}
export default ContactPage;
