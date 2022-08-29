import React ,{useState, useEffect} from "react";
import SideNav from "../Components/SideNav";
import icon from "../cash-icon.png";
import ExpenseCard from "../Components/ExpenseCard";

function Card(props) {
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

function DashboardHome() {
  const [expenseData, setExpenseData] = useState([]);
  const [apiCall, setApiCall] = useState(false);
  const [Amount, setAmount] = useState(0);
  useEffect(() =>{
    async function x(){
      let userToken = await localStorage.getItem('userToken')
      const res = await fetch('https://map-travel-app-backend.herokuapp.com/api/expense', {
        method:'GET',
        header:{
          "Content-Type": "application/json",
          userToken
        }
      });
      const result = await res.json();
      let sum = 0;
      result.user.forEach((e) => {
        console.log(sum , ' : Amount ' , e.price, " : price " )
        sum = sum + e.price;
      });
      setAmount(sum);
      setExpenseData(result.user);
      
    }
    
    setApiCall(true);
    x();
  },[apiCall])
  return (
    <div className="d-flex  .d-xl-flex-row .d-md-flex-row">
      {/* <div className=''> */}
      <SideNav apiCall={apiCall} setApiCall={setApiCall} />

      {/* </div> */}

    <div className='containerDashboard mt-2 '>

<div className='w-50 px-5'>
    <div className="card bg-dark  text-light">
        <div className="card-body ">
          <div>
            <p>Total Amount Spent: Rs.{Amount} </p> <p></p>

          </div>
        </div>
          </div>
        </div>


        <div className="cardMain">
          <h1 className="text-light text-center my-4">Expenses </h1>
          {expenseData.map((e)=>{
            return(
              <ExpenseCard title={e.title} price={e.price} id={e._id} key={e._id} apiCall = {apiCall} setApiCall = {setApiCall}/>
            )
          })}
          

        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
