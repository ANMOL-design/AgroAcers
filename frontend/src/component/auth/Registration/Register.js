import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';


const  Register = ()=>{
    const navigate = useNavigate();
    // const history = useHistory();
    const [user,setUser] =useState({
        name:"",email:"",number:"",password:"",cpassword:""
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

  const res =  await fetch("/register" ,{
      method : "POST",
      headers : { 
          "content-Type" : "application/json"
      },
      body : JSON.stringify({
        name,email,number,password,cpassword
      })
  } );
  const data = await res.json();
  
  if(res.status === 201){
    window.alert("succesful registeration");
    navigate('login', { replace: true });
  }
  else {
      console.log(res)
    window.alert("Registration is not succesfull , try again")
}
  }
        return(
            <>
           <div className="signup-page">
               <form method="POST" id="register-form">
               <label htmlFor="name">
                   <input type="text" name="name"  autoComplete="off" required value={user.name} onChange={handleInput} id="name" placeholder="Enter your name" />
               </label>
               <label htmlFor="email">
                   <input type="email" name="email" autoComplete="off" required value={user.email} onChange={handleInput} id="email" placeholder="Enter your email" />
               </label>
               <label htmlFor="number">
                   <input type="number" name="number" autoComplete="off" required value={user.number} onChange={handleInput} id="number" placeholder="Enter your phone number" />
               </label>
               <label htmlFor="password">
                   <input type="password" name="password" autoComplete="off" required value={user.password} onChange={handleInput} id="password" placeholder="Enter your password" />
               </label>
               <label htmlFor="cpassword">
                   <input type="password" name="cpassword" autoComplete="off" required value={user.cpassword} onChange={handleInput} id="cpassword" placeholder="confirm your password " />
               </label>

               <div className="submit-btn btn">
                   <input type="submit" name="register" id="register" className="form-submit" onClick={postData} value="register" />
               </div>
               </form>
           </div>
            </>
        );
    }

export default Register;