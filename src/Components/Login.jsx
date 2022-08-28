import React , {useState} from "react";


const Login = () => {
  const [formData, setFormData] = useState({email:"" , password:""});
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(formData)
    const res = await fetch('http://localhost:8080/api/login' , {
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData)
    })
    const result  = await res.json();
    console.log(result , 'result')
    localStorage.setItem('userToken', result.userToken);
    setFormData({
      email:"" , password:""
     })
  }
  return (
    <>
    <div className="log-form">
  <h2>Login to your account</h2>
  <form onSubmit={handleSubmit}>
  <input type="email" title="username" value={formData.email} onChange = {(e)=>{setFormData({...formData, email:e.currentTarget.value})}} placeholder="Enter your email address" />
    <input type="password" title="username" value={formData.password} onChange = {(e)=>{setFormData({...formData, password:e.currentTarget.value})}} placeholder="password" />
    <button type="submit" className="btn">Login</button>
    {/* <a className="forgot" href="#">Forgot Username?</a> */}
  </form>
</div>

    </>
  );
};

export default Login;
