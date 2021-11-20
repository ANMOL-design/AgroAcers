import React from 'react';
import {BrowserRouter, Route,Routes}  from 'react-router-dom'
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import Login from "./component/auth/login/Login";
import Register from "./component/auth/Registration/Register";
import Errorpage from './component/errorPage/error';

class App extends React.Component {
  render(){
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   {/* <Routes>
    <Route  path="/login" component ={Login} ></Route>
    <Route  path="/register" component ={Register} ></Route>
    <Route exact  path="/" component ={Home} ></Route>
      </Routes> */}
     <Routes>
       
      <Route exact path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="register/login" element={<Login/>}/>
      <Route path="" element={<Errorpage/>}/>
      
    </Routes>
      </BrowserRouter>
   </>
  );
    }
}

export default App;
