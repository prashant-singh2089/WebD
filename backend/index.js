const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
app.use(express.json()); //request to response that will automatically pass through the json
app.use(cors()); //react project connect to express app to 4000 port

// Database connection with MongoDB
mongoose.connect("mongodb+srv://ecommerceweb:ecom1234@cluster0.553bf.mongodb.net/e-commerce");
