// import React , {useState,useEffect} from 'react'
// import ExpenseCard from '../Components/ExpenseCard';
// import icon from "../cash-icon.png";

// function DashboardAnalysis() {
//   const [toSearch, setToSearch] = useState("food");
//   const [expenseData, setExpenseData] = useState([]);
//   const [apiCall, setApiCall] = useState(false);
//   useEffect(() =>{
//     async function x(){
//       let userToken = await localStorage.getItem('userToken')
//       const res = await fetch(`https://map-travel-app-backend.herokuapp.com/api/expense/byUser/filter?search=food` , {
//         method:'GET',
//         header:{
//           "Content-Type": "application/json",
//           userToken
//         }
//       });
//       const result = await res.json();
//       setExpenseData(result.user);
//     }
//     setApiCall(true);
//     x();
//   },[apiCall])
//   return (
//     <div>
      

//       <div>
//         <select>
//           <option value="Food">Food</option>
//           <option value="Travel">Travel</option>
//           <option value="Shopping">Shopping</option>
//           <option value="Others">Others</option>
//         </select>
//       </div>
//       <div className="cardMain">
//           {expenseData.map((e)=>{
//             return(
//               <ExpenseCard title={e.title} price={e.price} id={e._id} key={e._id} apiCall = {apiCall} setApiCall = {setApiCall}/>
//             )
//           })}
          

//         </div>
//     </div>
//   )
// }

// export default DashboardAnalysis