import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is imported
import { Link } from "react-router-dom"; // Import Link for navigation
import  './Login.css'

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    // Send login request to the server
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          // Redirect to home on successful login
          navigate("/home");
        } else {
          // Show failure message if credentials are incorrect
          alert("Login Failed: Incorrect credentials or user does not exist.");
        }
      })
      .catch((err) => {
        console.error(err);
        // Show generic error message if there's an issue with the request
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="Log">
      <h2 className="logi">Login</h2>
      <div >
        <form onSubmit={submit}>
          <div className="cen" >
            <div>
            <label htmlFor="email">
              <strong  >Email.</strong>
            </label>
            </div>
            <div>
            <input
              type="email"
              placeholder="please submit your email"
              name="email"
              value={email}
              className="la"
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
          </div>
          <div className="cen">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="please submit your password"
              name="password"
              value={password}
              className="la"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Login
          </button>
        </form>

        <Link to="/register">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
}

export default LogIn;
