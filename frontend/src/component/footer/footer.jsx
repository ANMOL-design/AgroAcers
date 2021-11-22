import React from "react";
import "../../Styles/footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="Footer-container">
           <div className="footer-aboutus-container">
                <h3>About us</h3>
                <hr />
                <p>
                  AgroAcers is a non-profited website develop to help the farmer of
                  country to raise the issue of farmer to government and AgroAcers
                  provide the facilities like mandi price , farming shop ,crops etc{" "}
                </p>
          </div>
          <div className="usefull-link-container">
              <h3>Usefull Links</h3>
              <hr />
              <ul className="usefull-links-item">
                  <li className="usefull-links-list">
                      <Link className="usefull-links" to="">
                        About us
                      </Link>
                  </li>

                  <li className="usefull-links-list">
                      <Link className="usefull-links" to="">
                        Contact us
                      </Link>
                  </li>

                  <li className="usefull-links-list">
                      <Link className="usefull-links" to="">
                          AgroAcers Store
                      </Link>
                  </li>

                  <li className="usefull-links-list">
                        <Link className="usefull-links" to="">
                            Government Schemes
                        </Link>
                  </li>

                  <li className="usefull-links-list">
                        <Link className="usefull-links" to="">
                            Mandi Rates
                        </Link>
                  </li>

                  <li className="usefull-links-list">
                        <Link className="usefull-links" to="">
                            Privacy policy
                        </Link>
                  </li>
               </ul>
            </div>
            <div className="subscribe-form-container">
                    <h3>Subscribe us</h3>
                    <hr />
                    <form className="subscribe-form">
                          <input type="text" placeholder="first name" name="FName" id="FName" />
                          <input type="text" name="Lname" placeholder="Last name" id="LName" />
                          <input type="email" name="Email" placeholder="email" id="email" />
                          <button className="btn btn-primary">Subscribe</button>
                    </form>
            </div>
            <div className="footer-location-container">
                <h3>Location</h3>
                <hr />
                <iframe className="footer-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0140203144547!2d77.15801211444305!3d30.03645562590628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e58fe0f7630b9%3A0x25907b84aeed8606!2sSeth%20Jai%20Parkash%20Mukand%20Lal%20Institute%20Of%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1637601271535!5m2!1sen!2sin"></iframe>
            </div>
        </div>

        <div className="copyright-footer-container">
              <h6 className="copyright-footer-text">
                   2021 &copy; AgroAcers All Rights reserved{" "}
              </h6>
        </div>
      </>
    );
  }
}
export default Footer;
