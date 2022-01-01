import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "./../../Images/Logo.png";
import "./../../Styles/header.css";
import { UserContext } from "../../App";

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
  
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/aboutuser', {
                method: "GET",
                headers: {
                    "Accept" : "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);

            
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

  const RenderAuth = () => {
    if (!state) {
      return (
        <>
          <ul className="navbar-nav" id="auth-btn">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <button className={"bg-btn"}>Login</button>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                <button className={"bg-btn"}>Register</button>
              </NavLink>
            </li>
          </ul>
        </>
      );
    } else {
      if(userData.isAdmin === true){
      return (
        <>
        
          <div id="logout-btn">
              <ul className="navbar-nav">
                <div className="dropdown">
                  <li className="nav-item">
                    <div className="userinfoheader dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user-circle-o">&nbsp;</i> Hi, {userData.name}
                    </div>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <a class="dropdown-item" href="/">Cart</a>
                      <Link class="dropdown-item"  to="/admin">Admin</Link>
                      <Link class="dropdown-item" to="/aboutuser">About User</Link>
                      <NavLink className="nav-link dropdown-item" to="/logout">
                        <button className={"bg-btn"}>Logout</button>
                      </NavLink>
        
                  </div>
                  </li>
                </div>
              </ul>
          </div>
        </>
      );
      }
      else{
        return (
          <>
            <div id="logout-btn">
              <ul className="navbar-nav">
                <div className="dropdown">
                  <li className="nav-item">
                    <div className="userinfoheader dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user-circle-o">&nbsp;</i> Hi, {userData.name}
                    </div>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <a class="dropdown-item" href="/">Cart</a>
                      <Link class="dropdown-item" to="/aboutuser">About User</Link>
                      <NavLink className="nav-link dropdown-item" to="/logout">
                        <button className={"bg-btn"}>Logout</button>
                      </NavLink>
        
                  </div>
                  </li>
                </div>
              </ul>
          </div>
          </>
        );
      }
    }
  };

  // For Small Screen Render Login Register
  const RenderAuthSmall = () => {
    if (!state) {
      return (
        <>
          <div className={"hide_small hide_small_login"}>
              <NavLink className="nav-link" to="/login">
                <button className={"bg-btn"}>Login</button>
              </NavLink>
              <NavLink className="nav-link" to="/register">
                <button className={"bg-btn"}>Register</button>
              </NavLink>
            </div>
        </>
      );
    } else {
      if(userData.isAdmin === true){
      return (
        <>
        
            <div className={"hide_small"}>
              <ul className="navbar-nav">
                <div className="dropdown">
                  <li className="nav-item">
                    <div className="userinfoheader dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user-circle-o">&nbsp;</i> Hi, {userData.name}
                    </div>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="/">Cart</a>
                      <Link class="dropdown-item"  to="/admin">Admin</Link>
                      <Link class="dropdown-item" to="/aboutuser">About User</Link>
                      <NavLink className="nav-link dropdown-item" to="/logout">
                        <button className={"bg-btn"}>Logout</button>
                      </NavLink>
        
                  </div>
                  </li>
                </div>
              </ul>
            </div>
        </>
      );
      }
      else{
        return (
          <>
            <div className={"hide_small"}>
            <ul className="navbar-nav">
                <div className="dropdown">
                  <li className="nav-item">
                    <div className="userinfoheader dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user-circle-o">&nbsp;</i> Hi, {userData.name}
                    </div>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <a class="dropdown-item" href="/">Cart</a>
                      <Link class="dropdown-item" to="/aboutuser">About User</Link>
                      <NavLink className="nav-link dropdown-item" to="/logout">
                        <button className={"bg-btn"}>Logout</button>
                      </NavLink>
        
                  </div>
                  </li>
                </div>
              </ul>
            </div>
          </>
        );
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: "#77BC3F", fontWeight: "700", fontSize: "1.4rem" }}
          >
            <img
              src={Logo}
              alt=""
              width="35"
              height="30"
              className="d-inline-block align-text-top"
            />{" "}
            AgroAcers
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarSupportedContent"
          >
          
          <RenderAuthSmall />
          
            <div className={"nav-box-margin"}>
              <ul className="navbar-nav ul-border">
                <li className="nav-item">
                  <Link className="nav-link nav-hov" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link nav-hov" to="/shop">
                    Shop
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link nav-hov" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link nav-hov" to="/crops">
                    Blog
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle nav-hov"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/crops">
                      Crops
                    </NavLink>
                    <NavLink className="dropdown-item" to="/mandirates">
                      Mandi Price
                    </NavLink>
                    <NavLink className="dropdown-item" to="/agri">
                      Courses/Universities
                    </NavLink>
                    <NavLink className="dropdown-item" to="/Govt">
                      Government Policies{" "}
                    </NavLink>
                  </div>
                </li>

                <li className="nav-item nav-hov">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className={"list-hide"}>
              <RenderAuth />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
