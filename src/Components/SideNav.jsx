import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/sidebar.css'
import Modal from 'react-awesome-modal'

const SideNav = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [items, setItems] = useState({
    price:'' , purpose:'', title:'', desc:''
  });

  const addItems = (e) => {
    e.preventDefault();

    console.log(items);
    setItems({price:'' , purpose:'', title:'', desc:''})
  }

  return (
    <div class="container-fluid">
    <div class="row min-vh-100 flex-column flex-md-row">
      <aside class="col-12   p-0 bg-dark ">
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
              <Link to='/dashboard-home' class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/dashboard-analysis' class="nav-link">Analysis</Link>

            </li>
            <li class="nav-item">
              <Link to='/dashboard-analysis' class="nav-link">Profile</Link>

            </li>
            <li class="nav-item">
              <Link to='/dashboard-analysis' class="nav-link">Logout</Link>
            </li>
            <li>
              <button class='nav-item bg-dark text-light btn' onClick={()=>setModalAdd(true)}>Add Item</button>
            </li>
          </ul>
          </div>      
        </nav>   
      </aside>
      <Modal visible={modalAdd} width="318" height="336" effect="fadeInUp" onClickAway={()=>setModalAdd(false)}>
        <form onSubmit={addItems}>
          <input type="number" placeholder='price' value={items.price} onChange={(e)=>setItems({...items, price:e.currentTarget.value})}/>  
          {/* <input type="text" placeholder='purpose' value={items.purpose} onChange={(e)=>setItems({...items, purpose:e.currentTarget.value})}/> */}
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
              Purpose
            </button>
            {items.purpose && <p>{items.purpose}</p>}
            <ul class="dropdown-menu">
              <li><button class="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'others'})}>Others</button></li>
              <li><button class="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'food'})}>Food</button></li>
              <li><button class="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'shopping'})}>Shopping</button></li>
              <li><button class="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'travel'})}>Travel</button></li>
            </ul>
          </div>
          <input type="text" placeholder='title' value={items.title} onChange={(e)=>setItems({...items, title:e.currentTarget.value})}/>
          <input type="text" placeholder='description' value={items.desc} onChange={(e)=>setItems({...items, desc:e.currentTarget.value})}/>
          <button type="submit btn btn-dark text-light">Add Item</button>
        </form>
      </Modal>
    </div>
  </div>
  )
}

export default SideNav