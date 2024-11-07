import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const suBmit=(e)=>{

        e.preventDefault()

        axios.post('',{name,email,password})
        .then(result =>console.log(result))
        .catch(err =>console.log(err))

    }
  return (

    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input type="text"
           placeholder="Name"
           name="name"
          
          onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input type="email" placeholder="Email" name="email"
            onChange={(e)=>setEmail(e.target.value)}/> 
        </div>
        <div>
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input type="password" placeholder="Password" name="password" 
            onChange={(e)=>setPassword(e.target.value)}/>
          
        </div>
        
          <button type="submit">Register</button>
          </form>
          <p>Already have account</p>
          <Link to="/login">Login</Link>
        
 
    </div>
  );
}

export default SignUp;
