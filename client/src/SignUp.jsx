import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is imported

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Fixed function name to match the onSubmit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Post data to the server
        axios.post('http://localhost:4000/signup', { name, email, password })
            .then(result => {
                if (result.status === 201) {
                    console.log("User created successfully");
                    navigate("/login"); // Redirect to login after successful sign-up
                }
            })
            .catch(err => {
                // Check for the correct error response
                if (err.response && err.response.status === 409) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    console.log(err); // Log other errors to the console
                }
            });
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        <strong>Name</strong>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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

                <button type="submit">Register</button>
            </form>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default SignUp;
