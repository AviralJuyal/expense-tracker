import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/sidebar.css'
import Modal from 'react-awesome-modal'

const SideNav = (props) => {
  const [modalAdd, setModalAdd] = useState(false);
  const [items, setItems] = useState({
    price:'' , purpose:'', title:'', description:''
  });

  const addItems = async(e) => {
    e.preventDefault();
    let userToken = await localStorage.getItem('userToken')
    const res = await fetch('https://map-travel-app-backend.herokuapp.com/api/expense' , {
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        userToken
      },
      body:JSON.stringify(items)
    })
    const result  = await res.json();
    console.log(result , 'result');
    props.setApiCall(false)
    setModalAdd(false)
    setItems({price:'' , purpose:'', title:'', description:''})
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
              <Link to='/dashboard-analysis' className="nav-link">Logout</Link>
            </li>
            <li>
              <button className='nav-item bg-dark text-light btn' onClick={()=>setModalAdd(true)}>Add Item</button>
            </li>
          </ul>
          </div>      
        </nav>   
      </aside>
      <Modal visible={modalAdd} width="318" height="336" effect="fadeInUp" onClickAway={()=>setModalAdd(false)}>
        <form onSubmit={addItems}>
          <input type="number" placeholder='price' value={items.price} onChange={(e)=>setItems({...items, price:e.currentTarget.value})}/>  
          {/* <input type="text" placeholder='purpose' value={items.purpose} onChange={(e)=>setItems({...items, purpose:e.currentTarget.value})}/> */}
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
              Purpose
            </button>
            {items.purpose && <p>{items.purpose}</p>}
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'Others'})}>Others</button></li>
              <li><button className="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'Food'})}>Food</button></li>
              <li><button className="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'Shopping'})}>Shopping</button></li>
              <li><button className="dropdown-item" type="button" onClick={()=>setItems({...items, purpose:'Travel'})}>Travel</button></li>
            </ul>
          </div>
          <input type="text" placeholder='title' value={items.title} onChange={(e)=>setItems({...items, title:e.currentTarget.value})}/>
          <input type="text" placeholder='description' value={items.desc} onChange={(e)=>setItems({...items, description:e.currentTarget.value})}/>
          <button type="submit btn btn-dark text-light">Add Item</button>
        </form>
      </Modal>
    </div>
  </div>
  )
}

export default SideNav