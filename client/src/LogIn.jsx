import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is imported
import { Link } from "react-router-dom"; // Import Link for navigation

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    // Make sure the correct endpoint for login is provided
    axios
      .post('http://localhost:4000/login', { email, password }) // Adjust the endpoint as needed
      .then(result => {
        if (result.status === 201) {
            console.log("User Login successfully");
            navigate("/home"); // Redirect to login page after successful sign-up
        }
    })
    .catch(err => {
        if (err.response && err.response.status === 409) {
            // Email already exists, show an alert message
            window.alert("The email is already registered. Please use a different email.");
        } else {
            console.log(err); // Log other errors
        }
    });
};


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <Link to="/signup">Don't have an account? Sign up</Link>
    </div>
  );
}

export default LogIn;
