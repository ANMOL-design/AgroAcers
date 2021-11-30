import React from 'react';
import "./Styles/index.css"
import {BrowserRouter, Route,Routes}  from 'react-router-dom'
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import Login from "./component/auth/login/Login";
import Register from "./component/auth/Registration/Register";
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/footer/footer';
import ContactPage from './component/contactPage/contactPage';
import PrivacyPolicy from './component/footer/PrivacyPolicy';
import AboutUS from './component/AboutUs/about';
import MandiRate from './component/mandiRate/mandiRate.jsx';

class App extends React.Component {
  render(){
  return (
   <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="about" element={<AboutUS />} />
                <Route path="mandirates" element={<MandiRate/>} />
                <Route path="PrivacyPolicy" element={<PrivacyPolicy/>}/>
                <Route path="register/login" element={<Login/>}/>
                <Route path="/" element={<Home/>} exact/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            <Footer />
       </BrowserRouter>
   </>

  );
    }
}

export default App;
