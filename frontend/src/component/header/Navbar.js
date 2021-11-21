import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink,Link} from  'react-router-dom'
import Logo from "./../../Images/Logo.png"
import "./../../Styles/header.css"

class Navbar extends React.Component{

    render(){
        return(
            <>
              <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container-fluid">
                        <Link className="navbar-brand" to="/" style={{color: "#77BC3F", fontWeight: "700"}}>
                            <img src={Logo} alt="" width="35" height="30" className="d-inline-block align-text-top" /> AgroAcers
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                                  {/* A list shown on small screen  */}

                                  <div className={"hide_small"}>
                                      <NavLink className="nav-link" to="/login"><button className={"bg-btn"}>Login</button></NavLink>
                                      <NavLink className="nav-link" to="/register"><button className={"bg-btn"}>Register</button></NavLink>
                                 </div> 
                              <div className={"nav-box-margin"}>
                                  <ul className="navbar-nav ul-border">
                      
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/">Home</Link>
                                      </li>

                                      <li className="nav-item">
                                          <Link className="nav-link" to="/shop">Shop</Link>
                                      </li>

                                      <li className="nav-item">
                                          <Link className="nav-link" to="/about">About</Link>
                                      </li>

                                      <li className="nav-item">
                                          <Link className="nav-link" to="/blog">Blog</Link>
                                      </li>

                                      <li className="nav-item dropdown">
                                          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Services
                                          </Link>
                                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                              <NavLink className="dropdown-item" to="/crop">Crops</NavLink>
                                              <NavLink className="dropdown-item" to="/mandi">Mandi Price</NavLink>
                                              <NavLink className="dropdown-item" to="/agri">Courses/Universities</NavLink>
                                              <NavLink className="dropdown-item" to="/Govt">Government Policies </NavLink>
                                          </div>
                                      </li>

                                      <li className="nav-item">
                                          <Link className="nav-link" to="/contact">Contact</Link>
                                      </li>
                                   </ul>
                              </div>

                                  <div className={"list-hide"}>
                                      <ul className="navbar-nav">
                                          <li className="nav-item">
                                              <NavLink className="nav-link" to="/login"><button className={"bg-btn"}>Login</button></NavLink>
                                          </li>

                                          <li className="nav-item">
                                              <NavLink className="nav-link" to="/register"><button className={"bg-btn"}>Register</button></NavLink>
                                          </li>
                                      </ul>
                                 </div>                 
                         </div>
                    </div>
             </nav>
        </>
        );
    }
}
export default Navbar;
