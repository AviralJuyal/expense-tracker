import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            Demo Company
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mx-4 display-9 mb-2 mb-lg-0">
          <li className="nav-item">
                <Link className="nav-link  text-light" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="">
                  LOGIN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="">
                  SIGNUP
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link  text-light" onClick={()=>{localStorage.setItem('userToken',""); window.alert('Logged Out Successfully!')}}>
                 Logout
                </Link>
              </li> */}
          </ul>
          </div>
          
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;