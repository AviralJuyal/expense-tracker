import React from "react";

const Login = () => {
  return (
    <>
    <div class="log-form">
  <h2>Login to your account</h2>
  <form>
    <input type="email" title="username" placeholder="Enter your email address" />
    <input type="password" title="username" placeholder="password" />
    <button type="submit" class="btn">Login</button>
    {/* <a class="forgot" href="#">Forgot Username?</a> */}
  </form>
</div>

    </>
  );
};

export default Login;
