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
        console.log(name + " " + email + " " + password);

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });  // Corrected to UserModel
        console.log(existingUser);
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new UserModel({ name, email, password: hashedPassword });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Send the response
        res.status(201).json(savedUser);

    } catch (error) {  // Fixed catch syntax
        res.status(500).json({ error: error.message });
    }
});
