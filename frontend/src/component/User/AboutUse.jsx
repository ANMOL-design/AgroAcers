import { useContext, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { UserContext } from "../../App";
import userImg from "../../Images/New Img/UserImg.png";
import "../../Styles/aboutuser.css";
import Login from "../auth/login/Login";
const AboutUser = () => {
  const [userData, setUserData] = useState({});
  const { state, dispatch } = useContext(UserContext);
  const RenderAboutUser = () => {
    if (!state){
       return(
           <>
           <Login />
           </>
       )
    }
    else{
        return (
            <>
              <div className="container">
                <div className="aboutuser-container">
                  <div className="User-template-img">
                    <img src={userImg} alt="" />
                    <h3 className="username">{userData.name}</h3>
                    <Link className="profile-link" to="/Aboutuser">
                      Profile
                    </Link>
                  </div>
                  <div className="about-user-card">
                    <h1 className="profile-head">Profile</h1>
                    <h4 className="nameuser user-text">
                      <span className="UserLabel">Name : </span>
                      <span className="userinfo">{userData.name}</span>
                    </h4>
                    <h4 className="emailuser user-text">
                      <span className="UserLabel">Email Id : </span>
                      <span className="userinfo"> {userData.email}</span>
                    </h4>
                    <h4 className="numuser user-text">
                      <span className="UserLabel">Phone no : </span>
                      <span className="userinfo"> {userData.number}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </>
          );
    }
  }
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
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  
  return(
      <>
      <RenderAboutUser />
      </>
  );
}

export default AboutUser;