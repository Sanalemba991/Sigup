import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LogIn() {
const[email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();

const suBmit=(e)=>{
  e.preventDefault();
}
axios.post("/",{email,password})
.then(result => {
  if (result.status === 201) {
      console.log("User created successfully");
      navigate("/home"); // Redirect to login page after successful sign-up
  }
})
.catch(err => {
  if (err.response && err.response.status === 409) {
      // Email already exists, show an alert message
      window.alert("Login Successfully");
  } else {
      console.log(err); // Log other errors
  }
});
};



  return (

    <div>
      <h1>Login</h1>
      <form onSubmit={suBmit}>
      <div>
        <label htmlFor='email'>
          <strong>email</strong>
        </label>
        <input type='text'
                placeholder='email'
                name='email'
                value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                
        
        />
    
      </div>


      </form>
    
      
    </div>
  )


export default LogIn
