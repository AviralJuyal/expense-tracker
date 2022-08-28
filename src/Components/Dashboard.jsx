import React from 'react'
import SideNav from './SideNav'
import icon from '../cash-icon.png'

const Dashboard = () => {
  return (
    <div>
  <SideNav/>

  <div className='containerDashboard'>

    <div className=''>
        <div className="card bg-dark text-light">
            <div className="card-body">
                This is some text within a card body.
            </div>
        </div>

        <div className="card bg-dark text-light h-100">
            <div className="card-body">
                This is some text within a card body.
            </div>
        </div>
    </div>

    <div className='cardMain'>
    <div className="card bg-dark text-light mb-4 ">
            <div className="card-body cardBody">
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