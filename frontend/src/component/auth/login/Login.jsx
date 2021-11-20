import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
const  Login = ()=>{
    const navigate = useNavigate();
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const loginUser = async (e)=>{
        e.preventDefault();
        const res =  await fetch("/login" ,{
            method : "POST",
            headers : { 
                "content-Type" : "application/json"
            },
            body : JSON.stringify({
             email,
             password
            })
        } );
        const data = res.JSON;
        
        if(res.status ===201){
            window.alert("Login succesful")
            navigate('/', { replace: true });
        }
        else{
            window.alert("Invalid credential")
          
        }
    }
        return(
            <>
             <div className="login-page">
               <form method="POST">
               <label htmlFor="email">
                   <input type="email" name="email" autoComplete="off" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" placeholder="Enter your email" />
               </label>
               <label htmlFor="password">
                   <input type="password" name="password" autoComplete="off" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder="Enter your password" />
               </label>

               <div className="login-btn btn">
                   <input type="submit" name="login" onClick={loginUser} id="login" className="form-submit" value="login" />
               </div>
               </form>
           </div>
            </>
        );
    }

export default Login;