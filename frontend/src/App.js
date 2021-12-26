import React, { createContext, useReducer } from 'react';
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
import Logout from './component/auth/logout/logout';
import { initialState,reducer} from './Reducer/useReducer';
import AboutUser from './component/User/AboutUse';
import ShopHome from './component/AgroShop/shop';
import UserData from './component/AdminPortal/Userdata';
import ContactPadeData from './component/AdminPortal/contactDta';
import AdminPage from './component/AdminPortal/adminPage';
import UploadPost from './component/AdminPortal/uploadpage';
import AddUniversity from './component/AdminPortal/addUniversity';
import AgricultureUniversity from './component/AgriculturUmiversity/AgricultureUniversities';
export const UserContext = createContext();

const App = ()=> {
 const [state,dispatch] =  useReducer(reducer,initialState)
  return (
    
   <>
   
      <BrowserRouter>
      <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>
      <Routing />
      <Footer />
           </UserContext.Provider>
       </BrowserRouter>
   </>

  );
    
}
const Routing = ()=>{
  
  return(
    <>
    
        <Routes>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="contact" element={<ContactPage/>}/>
              <Route path="about" exact element={<AboutUS />} />
              <Route path="mandirates" element={<MandiRate/>} />
              <Route path="AboutUser" exact element={<AboutUser/>} />
              <Route path="register/login" element={<Login/>}/>
              <Route path="logout" element={<Logout/>}/>
              <Route path="agri" element={<AgricultureUniversity/>}/>
              <Route path="admin/UserData" element={<UserData/>}/>
              <Route path="admin/Contact" element={<ContactPadeData/>}/>
              <Route path="admin/uploadpost" element={<UploadPost/>}/>
              <Route path="admin/AddUniversity" element={<AddUniversity/>}/>
              <Route path="admin" element={<AdminPage/>}/>
              <Route path="PrivacyPolicy" element={<PrivacyPolicy/>}/>
              <Route path="/shop" element={ <ShopHome />} />
              <Route path="/" element={<Home/>} exact/>
              <Route path="*" element={<PageNotFound/>}/>
          </Routes>
              </>
          
  );
}
export default App;
