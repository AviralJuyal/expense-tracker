import React from 'react'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />


    <div className="container mt-4">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-light">The Expense Tracker that works for you</h1>
        <p class="lead text-light">Track all your expenses here... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et repellat cupiditate, corporis officia sequi numquam aspernatur fugiat exercitationem incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, culpa! Iusto blanditiis consequatur sapiente voluptas debitis eum et magnam corporis?</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Get Started</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png" alt="" width="720"/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home