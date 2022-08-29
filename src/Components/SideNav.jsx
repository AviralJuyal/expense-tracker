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

  const handleLogout = ()=>{
    localStorage.removeItem('userToken');
    // console.log(localStorage.getItem('userToken'));
    window.location = '/'
  }

  return (
    <div className="container-fluid">
    <div className="row min-vh-100 flex-column flex-md-row">
      <aside className="col-12   p-0 bg-dark ">
        <nav className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top " id="sidebar">
          <div className="text-center p-3">
           <Link to='/' className="navbar-brand mx-0 font-weight-bold  text-nowrap">Expense Tracker</Link>
          </div>
              <button type="button" className="navbar-toggler border-0 order-1" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse order-last" id="nav">
            <ul className="navbar-nav flex-column w-100 justify-content-center">
            <li className="nav-item">
              <Link to='/dashboard-home' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/dashboard-analysis' className="nav-link">Analysis</Link>

            </li>
            <li className="nav-item">
              <Link to='/dashboard-analysis' className="nav-link">Profile</Link>

            </li>
            <li className="nav-item pointDiv">
              <div  className="nav-link" onClick={handleLogout}>Logout</div>
            </li>
            <li className="nav-item pointDiv">
              <div className='nav-link ' onClick={()=>setModalAdd(true)}>Add Item</div>
            </li>
          </ul>
          </div>      
        </nav>   
      </aside>
      <Modal visible={modalAdd} width="300" height="240" effect="fadeInUp" onClickAway={()=>{setModalAdd(false) ;setItems('')}}>
        <form onSubmit={addItems} className='form container p-4 bg-dark text-light'>
          <h3 className='display-6'>Add New Item</h3>
          <input className='form-label' type="number" placeholder='Price' value={items.price} onChange={(e)=>setItems({...items, price:e.currentTarget.value})}/>  
          {/* <input type="text" placeholder='purpose' value={items.purpose} onChange={(e)=>setItems({...items, purpose:e.currentTarget.value})}/> */}
         
          <input className='form-label' type="text" placeholder='Title' value={items.title} onChange={(e)=>setItems({...items, title:e.currentTarget.value})}/>
          <input className='form-label' type="text" placeholder='Description' value={items.desc} onChange={(e)=>setItems({...items, desc:e.currentTarget.value})}/> <br />
          <div className="dropdown ">
            <button className="btn btn-secondary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
              Purpose
            </button>
            {items.purpose && <p className='h6 mt-2'>{items.purpose}</p>}
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'others'})}>Others</button></li> 
              <li><button className="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'food'})}>Food</button></li>
              <li><button className="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'shopping'})}>Shopping</button></li>
              <li><button className="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'travel'})}>Travel</button></li>
            </ul>
          </div><br />
          <button type="submit" className='btn btn-dark text-light   '>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
          </button>
        </form>
      </Modal>
    </div>
  </div>
  )
}

export default SideNav