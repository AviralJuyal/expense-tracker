import React from 'react'
import '../assets/css/sidebar.css'

const SideNav = () => {
  return (
    <div class="container-fluid">
    <div class="row min-vh-100 flex-column flex-md-row">
      <aside class="col-12 col-md-3 col-xl-2 p-0 bg-dark ">
        <nav class="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top " id="sidebar">
          <div class="text-center p-3">
           <a href="#" class="navbar-brand mx-0 font-weight-bold  text-nowrap" >Expense Tracker</a>
          </div>
              <button type="button" class="navbar-toggler border-0 order-1" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse order-last" id="nav">
            <ul class="navbar-nav flex-column w-100 justify-content-center">
            <li class="nav-item">
              <a href="#" class="nav-link"> Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"> Analysis</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"> Profile </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"> Logout </a>
            </li>
          </ul>
          </div>      
        </nav>   
      </aside>
    </div>
  </div>
  )
}

export default SideNav