import React , {useState} from 'react'

const Register = () => {
  const [formData, setFormData] = useState({email:"" , password:""});
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8080/api/signup' , {
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData)
    })
    const result  = await res.json();
    console.log(result , 'result')
   setFormData({
    email:"" , password:""
   })
  }
  return (
    <>
     <div class="log-form">
  <h2>Create New Account </h2>
  <form onSubmit={handleSubmit}>
    <input type="email" title="username" value={formData.email} onChange = {(e)=>{setFormData({...formData, email:e.currentTarget.value})}} placeholder="Enter your email address" />
    <input type="password" title="username" value={formData.password} onChange = {(e)=>{setFormData({...formData, password:e.currentTarget.value})}} placeholder="password" />
    <button type="submit" class="btn">Register</button>
  </form>
</div>
    </>
  )
}

export default Register