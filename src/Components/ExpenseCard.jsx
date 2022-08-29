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
            <button className="btn btn-dark text-light" onClick={()=>{handleDelete(props.id , props.apiCall , props.setApiCall)}}>Del</button>
          </div>
        </div>
      );
}

export default ExpenseCard