const express = require("express");
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
require('dotenv').config()


const app = express()
const port = 3000

// connection to mongoose 
mongoose.connect("mongodb://localhost/login").then(() => {
    console.log("successful connect to mongoose");
}).catch((err) => {
    console.error("unable to connect", err);
})

app.post("/register", async (req, res) => {
    
})


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})