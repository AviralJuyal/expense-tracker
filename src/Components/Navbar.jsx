import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Modal from 'react-awesome-modal'
import Register from "./Register";



function Navbar() {
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
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
          <li className="nav-item ">
                <Link className="nav-link  text-light mx-2" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={()=>setLogin(true)} className="nav-link  text-light mx-2" to="">
                  LOGIN
                </Link>
                {/* <button className="nav-link bg-dark text-light mx-2">LOGIN</button> */}
              </li>
              <li className="nav-item">
                <Link onClick={()=>setRegister(true)} className="nav-link  text-light mx-2" to="">
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

      <Modal visible={login} width="318" height="336" effect="fadeInUp" onClickAway={()=>setLogin(false)}>
            <Login/>
          </Modal>

      <Modal visible={register} width="318" height="336" effect="fadeInUp" onClickAway={()=>setRegister(false)}>
            <Register/>
          </Modal>
      
    </>
  );
}

export default Navbar;