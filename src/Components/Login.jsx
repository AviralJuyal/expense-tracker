import React , {useState} from "react";


const Login = () => {
  const [formData, setFormData] = useState({email:"" , password:""});
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const [msg, setMsg] = useState('')
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(formData)
    const res = await fetch('https://map-travel-app-backend.herokuapp.com/api/login' , {
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData)
    })
    const result  = await res.json();
    setMsg(result.msg);

    if(result.status){
      setSuccess(true)
      setTimeout(() => setSuccess(false) , 3000);
      console.log(result , 'result')
      localStorage.setItem('userToken', result.userToken);
      window.location = '/dashboard-home'
    }

    else{
      // console.log(result.msg)
      setFail(true);
      setTimeout(() => setFail(false) , 3000);
    }
    setFormData({
      email:"" , password:""
     })
  }
  return (
    <>
    <div className="log-form">
    {success && 
      <div className="alert alert-success" role="alert">
      {msg}
          </div>
    }  
    {fail && 
      <div className="alert alert-danger" role="alert">
         {msg}
          </div>
          }  
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
