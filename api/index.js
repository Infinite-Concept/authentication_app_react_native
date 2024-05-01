const express = require("express")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const cors = require("cors")
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const User = require("./models/user")
require("dotenv").config()

const port = process.env.PORT
const app = express()

// connection to mongoose 
mongoose.connect("mongodb://localhost/login").then(() => {
    console.log("successful connected to mongodb");
}).catch((err) => {
    console.log("error connecting to mongodb", err);
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/register", async (req, res) => {
    try{
        const {firstName, phone, lastName, email, password} =req.body

        // find exiting user 
        const exitingUser = await User.findOne({email})

        if(exitingUser){
            return res.status(400).json({message: "email already registered"})
        }
         

        const newUser = new User({firstName, phone, lastName, email, password} );

        // generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex")

        // save the new 
        await newUser.save()

        sendVerificationEmail(newUser.email, newUser.verificationToken);
        
        res.status(200).json({message: "Registration successful"})

    }catch(err){
        console.log("error registering user", err);
        res.status(500).json({message: "error registering user"})
    }
})

const sendVerificationEmail = async (email, verificationToken) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ifenowoifesegun@gmail.com",
            pass: process.env.APP_PASSWORD
        }
    })

    const mailOptions ={
        from: "Authen App",
        to: email,
        subject: "Email Verification",
        text: `please click the following link to verify your email http://localhost:3000/verify/${verificationToken}`,
    }

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("error sending email", error);
    }
}




app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})