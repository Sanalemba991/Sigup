const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const dotenv = require("dotencv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(MONGI_URI)