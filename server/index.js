const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const UserModel = require('./model/User');  // Corrected to match the imported model name

dotenv.config();  

const app = express();
app.use(express.json());
app.use(cors());  // Enable CORS

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// Signup route
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        console.log(existingUser);

        if (existingUser) {
            // Return conflict status code (409)
            return res.status(409).json({ error: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new UserModel({ name, email, password: hashedPassword });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Send the response with the saved user (without password)
        res.status(201).json({
            name: savedUser.name,
            email: savedUser.email,
            id: savedUser._id
        });

    } catch (error) {
        // Handle unexpected errors
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
