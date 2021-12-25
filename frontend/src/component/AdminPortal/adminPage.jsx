import adminimg from "../../Images/crousal/admin-template.jpg";
import UserBanner from "../../Images/New Img/Userbanner.jpg";
import contactBanner from "../../Images/New Img/contactPage.jpg";
import blogBanner from "../../Images/New Img/addBanner.jpg";
import productBanner from "../../Images/New Img/addProduct.jpg";
import universityBanner from "../../Images/New Img/agricultureuniversity.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import '../../Styles/adminpage.css'
const AdminPage = () => {
  return (
    <>
      <div className="container">
        <img
          className="d-block img-fluid  w-100"
          src={adminimg}
          alt="First slide"
        />
          <h2 className="admin-page-heading">AdminStrator Services</h2>
        <div className="admin-card-container">
          <div class="card">
            <img
              class="card-img-top img-fluid"
              src={UserBanner}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">User Details</h5>
              <p class="card-text">
                This section is for view the User details. To get the details of all the
                user
              </p>
              <Link to="Userdata" class="btn btn-primary">
                View UserDetails
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top img-fluid"
              src={contactBanner}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Contact Details</h5>
              <p class="card-text">
                This section is for Contact details. To get the details of all
                the message sent by User
              </p>
              <Link to="contact" class="btn btn-primary">
                View ContactDetails
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top img-fluid"
              src={blogBanner}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Add blog</h5>
              <p class="card-text">
                This section is for add blog. To add the content in blog to the website.
              </p>
              <Link to="uploadpost"  class="btn btn-primary">
                add blog
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top img-fluid"
              src={productBanner}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Add product</h5>
              <p class="card-text">
                This section is for add the product in Agroacers Shopping in website.
              </p>
              <Link to="uploadpost"  class="btn btn-primary">
                add product
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top img-fluid"
              src={universityBanner}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Add  University</h5>
              <p class="card-text">
                This section is for add the details of university in Agriculture University.
              </p>
              <Link to="AddUniversity"  class="btn btn-primary">
                add University
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminPage;
