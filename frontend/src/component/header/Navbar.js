import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink,Link} from  'react-router-dom'
class Navbar extends React.Component{

    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="contact">Contact us</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/crop">Crops</NavLink>
          <NavLink className="dropdown-item" to="/manfi">Mandi Price</NavLink>
          <NavLink className="dropdown-item" to="/agri">Agriculture Universities</NavLink>
          <NavLink className="dropdown-item" to="/shop">Agro Shop</NavLink>
          
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Log in</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
            </>
        );
    }
}
export default Navbar;
// import React from 'react'

// class Navbar extends React.Component{

//     render(){
//         return(
//             <>
//             </>
//         );
//     }
// }
// export default Navbar;