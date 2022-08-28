import React from 'react'
import SideNav from '../Components/SideNav'
import icon from '../cash-icon.png'


function DashboardHome() {
  return (
    <div className='d-flex  .d-xl-flex-row .d-md-flex-row'>
      {/* <div className=''> */}
       <SideNav />

      {/* </div> */}
    <div className='containerDashboard mt-2 '>

<div className='w-50 px-5'>
    <div class="card bg-dark  text-light">
        <div class="card-body ">
          <div>
            <p>Spend in </p> <p>Aug 27- Aug-30</p>
          </div>
        </div>
    </div>
</div>

<div className='cardMain'>
<div class="card bg-dark text-light mb-4 ">
        <div class="card-body cardBody">
            <div className='imgCash'>
                <img src={icon} alt="" height='20px'/>
            </div>
            <div className='contentCard'>
                <p>Your Share !</p>
                <p>20</p>
            </div>
            <button className='btn btn-light '>Del</button>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default DashboardHome