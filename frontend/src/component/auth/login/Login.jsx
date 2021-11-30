import React, { useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../../Styles/login.css";
import loginfarm from "../../../Images/login/login-farmer.jpg";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.JSON;
   
    if (res.status === 201) {
      window.alert("Login succesful");
      navigate("/", { replace: true });
    } else {
      window.alert("Invalid credential");
    }
  };
  return (
    <>
      <div className="bg-container" id="main-container">
        <div className="login-page">
          <div className="login-side-img">
            <img className="img-fluid" src={loginfarm} alt="loginfarmer" />
            <p className="login-par">already have account? <Link to="/register">Register</Link> </p>
          </div>
          <div className="login-form-container">
            <h2 className="login-heading">Log in</h2>
            <form method="POST">
              <label htmlFor="email">
                <i class="fa fa-user"></i>
                <input
                  className="email-input"
                  autoComplete="off"
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  placeholder="Enter your email"
                />
              </label>
              <br />
              <label htmlFor="password">
                <i class="fa fa-lock"></i>
                <input
                  className="password-input"
                  type="password"
                  name="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  placeholder="Enter your password"
                />
              </label>
              <br />
              <div className="login-btn btn">
                <input
                  type="submit"
                  name="login"
                  onClick={loginUser}
                  id="login"
                  className="form-submit"
                  value="login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
