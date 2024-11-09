import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Updated handleSubmit to give a more user-friendly alert for existing email
    const handleSubmit = (e) => {
        e.preventDefault();

        // Post data to the server for sign-up
        axios.post('http://localhost:4000/signup', { name, email, password })
            .then(result => {
                if (result.status === 201) {
                    console.log("User created successfully");
                    navigate("/"); // Redirect to login page after successful sign-up
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
   
        </div>
    );
}

export default SignUp;
