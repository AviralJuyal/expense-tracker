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
        <button className="btn btn-dark text-light ">Del</button>
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
      <div className="containerDashboard mt-2 ">
        <div className="w-50 px-5">
          <div class="card bg-dark  text-light">
            <div class="card-body ">
              <div>
                <p>Spend in </p> <p>Aug 27- Aug-30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cardMain">
          {expenseData.map((e)=>{
            return(
              <Card title={e.title} price={e.price} key={e._id}/>
            )
          })}
          
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
