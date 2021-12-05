import React,{useState} from "react";
import {useNavigate, Link} from 'react-router-dom';
import "./../../../Styles/register.css";
import "bootstrap/dist/css/bootstrap.css";
import regfarm from "../../../Images/reg4.jpg";


const  Register = ()=>{
    const navigate = useNavigate();
    // const history = useHistory();
    const [user,setUser] =useState({
        name:"",email:"",number:"",password:"",cpassword:"",time:""
    })
    
    let name , value;
    const  handleInput =async (e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user , [name]:value})
    }
    const postData =async (e)=>{
    e.preventDefault();
    const {name,email,number,password,cpassword} = user;

    let today  = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yy =today.getFullYear();
    let hh = today.getHours();
    let mi = today.getMinutes();
    let ss = today.getSeconds();
    let time = dd+"/"+mm+"/"+yy+"("+hh+":"+mi+":"+ss+")";

    const res =  await fetch("/register" ,{
        method : "POST",
        headers : { 
            "content-Type" : "application/json"
        },
        body : JSON.stringify({
            name,email,number,password,cpassword,time
        })
    } );
    const data = await res.json();
  
    if(res.status === 201){
        window.alert("Successful Registration.\nCongratulation now you are a part of Agro Family.");
        navigate('login', { replace: true });
    }
    else {
        console.log(res)
        window.alert("Registration Fails , Try again")
    }
  }
    return(
        <>
           <div id="main-container">
                <div className="register_container">
                    {/* Image code  */}
                    <div className="col-md-6 hidelogin">
                        <img src={regfarm} alt="Famer" className="regsideImg"/>
                    </div>
                    {/* form code  */}
                    <div className="col-md-6 col-sm-12">
                        <div className="register-page">
                            <div className="reg-form-container">
                            <h2 className="register-heading">Create your new account</h2>
                            <p className="register-para">"Do not wait until the conditions are perfect.<br />&nbsp;&nbsp;&nbsp;&nbsp;Beginning makes the condition perfect."</p>
                            
                            <form method="POST" id="register-form">
                                <label htmlFor="name" className="labelinp">
                                    <i className="fa fa-user">&nbsp;</i>
                                    <input type="text"
                                        className="all-input"
                                        name="name"  
                                        autoComplete="off" 
                                        required value={user.name} 
                                        onChange={handleInput} 
                                        id="name" 
                                        placeholder="Enter your name" 
                                    />
                                </label><br />
                                <label htmlFor="email" className="labelinp">
                                    <i className="fa fa-envelope">&nbsp;</i>
                                    <input type="email" 
                                        className="all-input"
                                        name="email" 
                                        autoComplete="off" 
                                        required value={user.email} 
                                        onChange={handleInput} 
                                        id="email" 
                                        placeholder="Enter your email" 
                                    
                                    />
                                </label><br />
                                <label htmlFor="number" className="labelinp">
                                    <i className="fa fa-phone">&nbsp;</i>
                                    <input type="number" 
                                        className="all-input"
                                        name="number" 
                                        autoComplete="off" 
                                        required value={user.number} 
                                        onChange={handleInput} 
                                        id="number" 
                                        placeholder="Enter your phone number" 
                                        min="0" 
                                    />
                                </label><br />
                                <label htmlFor="password" className="labelinp">
                                    <i className="fa fa-lock">&nbsp;</i>
                                    <input type="password" 
                                        className="all-input"
                                        name="password" 
                                        autoComplete="off" 
                                        required value={user.password} 
                                        onChange={handleInput} 
                                        id="password" 
                                        placeholder="Enter your password" 
                                        minlength="8"
                                    />
                                </label><br />
                                <label htmlFor="cpassword" className="labelinp">
                                    <i className="fa fa-lock">&nbsp;</i>
                                    <input type="password" 
                                        className="all-input"
                                        name="cpassword" 
                                        autoComplete="off" 
                                        required value={user.cpassword} 
                                        onChange={handleInput} id="cpassword" 
                                        placeholder="Confirm your password"
                                        minlength="8"
                                    />
                                </label><br />

                                <div>
                                    <p className="reg-par-reg">Already have an Account? <Link to="/login">Login</Link> </p>
                                </div>

                                <label htmlFor="submit" className="labelinp btn">
                                    <input type="submit"  
                                        name="register" 
                                        id="register" 
                                        className="form-submit" 
                                        onClick={postData} 
                                        value="Register" 
                                    />
                                </label>
                            </form>            
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        </>
    );
    }

export default Register;

