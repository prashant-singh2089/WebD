const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const exp = require("constants");

app.use(express.json());
app.use(cors());

//Databse connction with mongodb
mongoose.connect("mongodb+srv://ecomweb:ecom1234@cluster0.6ah2w.mongodb.net/e-commerce");

//API creation

app.get("/",(req,res)=>{
    res.send("Express App is running")
})


app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on port "+port)
    }
    else{
        console.log("Error : "+error)
    }
})
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const exp = require("constants");

app.use(express.json()); //request to response that will automatically pass through the json
app.use(cors()); //react project connect to express app to 4000 port




