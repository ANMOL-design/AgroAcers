import React from 'react';
import "./Styles/index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import Login from "./component/auth/login/Login";
import Register from "./component/auth/Registration/Register"; <<
<< << < HEAD
import PageNotFound from './component/PageNotFound/PageNotFound'; ===
=== =
import Footer from './component/footer/footer'; >>>
>>> > d94b8fdf895bdca9c1b394350a2090f4c1f135c9

class App extends React.Component {
    render() {
        return ( <
            >
            <
            BrowserRouter >
            <
            Navbar / > {
                /* <Routes>
                    <Route  path="/login" component ={Login} ></Route>
                    <Route  path="/register" component ={Register} ></Route>
                    <Route exact  path="/" component ={Home} ></Route>
                      </Routes> */
            } <
            Routes >

            <
            Route path = "login"
            element = { < Login / > }
            /> <
            Route path = "register"
            element = { < Register / > }
            /> <
            Route path = "register/login"
            element = { < Login / > }
            /> <
            Route path = "/"
            element = { < Home / > }
            exact / >
            <
            Route path = "*"
            element = { < PageNotFound / > }
            />

            <
            /Routes> <
            Footer / >
            <
            /BrowserRouter> <
            />

        );
    }
}

export default App;