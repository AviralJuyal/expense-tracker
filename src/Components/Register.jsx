import React from 'react'

const Register = () => {
  return (
    <>
     <div class="log-form">
  <h2>Create New Account </h2>
  <form>
    <input type="email" title="username" placeholder="Enter your email address" />
    <input type="password" title="username" placeholder="password" />
    <button type="submit" class="btn">Register</button>
  </form>
</div>
    </>
  )
}

export default Register