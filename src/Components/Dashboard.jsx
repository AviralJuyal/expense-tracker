import React from 'react'
import SideNav from './SideNav'
import icon from '../cash-icon.png'

const Dashboard = () => {
  return (
    <div>
  <SideNav/>

  <div className='containerDashboard'>

    <div className=''>
        <div class="card bg-dark text-light">
            <div class="card-body">
                This is some text within a card body.
            </div>
        </div>

        <div class="card bg-dark text-light h-100">
            <div class="card-body">
                This is some text within a card body.
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

export default Dashboard