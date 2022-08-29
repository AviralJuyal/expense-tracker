import React ,{useState, useEffect} from "react";
import SideNav from "../Components/SideNav";
import icon from "../cash-icon.png";

function Card(props) {
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
        <button className="btn btn-dark text-light btnDel">
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

function DashboardHome() {
  const [expenseData, setExpenseData] = useState([]);
  const [apiCall, setApiCall] = useState(false);
  useEffect(() =>{
    async function x(){
      const res = await fetch('https://map-travel-app-backend.herokuapp.com/api/expense');
      const result = await res.json();
      setExpenseData(result.user);
      console.log(expenseData);
    }
    setApiCall(true);
    x();
  },[!apiCall])
  return (
    <div className="d-flex  .d-xl-flex-row .d-md-flex-row">
      {/* <div className=''> */}
      <SideNav />

      {/* </div> */}

    <div className='containerDashboard mt-2 '>

<div className='w-50 px-5'>
    <div className="card bg-dark  text-light">
        <div className="card-body ">
          <div>
            <p>Spend in </p> <p>Aug 27- Aug-30</p>

          </div>
        </div>
          </div>
        </div>


        <div className="cardMain">
          {expenseData.map((e)=>{
            return(
              <Card title={e.title} price={e.price} key={e._id} purpose={e.purpose}/>
            )
          })}
          

        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
