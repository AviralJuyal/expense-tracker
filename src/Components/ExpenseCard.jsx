import React from 'react'
import icon from "../cash-icon.png";

function ExpenseCard(props) {
    const handleDelete = async(id , apiCall , setApiCall) => {
        const res = await fetch(`https://map-travel-app-backend.herokuapp.com/api/expense/${id}` , {
          method:'DELETE',
          headers:{
            "Content-Type": "application/json",
          },
        });
        const result = await res.json();
        console.log(result , 'result')
        setApiCall(!apiCall)
      }
      return (
        <div class="card bg-dark text-light mb-4 ">
        <div class="card-body cardBody">
  
          <div className="imgCash">
            <img src={icon} alt="" height="20px" />
          </div>
  
          <div className="contentCard">
            <p>{props?.title}</p>
            <p>Rs.{props?.price}</p>
          </div>
  
          <div  className="d-flex flex-column justify-content-end ">
          <p>{props?.purpose}</p>
          <button className="btn btn-dark text-light btnDel" onClick={()=>{handleDelete(props.id , props.apiCall , props.setApiCall)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
          </button>
          </div>
  
        </div>
      </div>
      );
}

export default ExpenseCard