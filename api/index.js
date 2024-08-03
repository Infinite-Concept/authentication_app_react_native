const express = require("express")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
const cors = require("cors")
const crypto = require("crypto")
const userRouter = require("./routes/user")
require("dotenv").config()

const port = process.env.PORT
const app = express()

// connection to mongoose 
mongoose.connect("mongodb://localhost/login").then(() => {
    app.listen(port, () => {
        console.log(`server listening on port ${port}`);
    })
}).catch((err) => {
    console.log("error connecting to mongodb", err);
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(userRouter)

// app.get("/verify/:token", async (req, res) => {
//     try{
//         const token = req.params.token;

//         const user = await User.findOne({ verificationToken: token});

//         if(!user) {
//             return res.status(404).json({message: "Invalid token"})
//         }

//         user.verified = true;
//         user.verificationToken = undefined;
//         await user.save();

//         res.status(200).json({message: "Email verified successfully"});

//     }catch(err){
//         console.log("error getting token", err);
//         res.status(500).json({message: "Email verification"})
//     }
// })

// const generateSecretKey = () => {
//     const secretKey = crypto.randomBytes(32).toString("hex");
//     return secretKey;
// }

// const secretKey = generateSecretKey();

// const sendVerificationEmail = async (email, verificationToken) => {

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "ifenowoifesegun@gmail.com",
//             pass: process.env.APP_PASSWORD
//         }
//     })

//     const mailOptions ={
//         from: "Authen App",
//         to: email,
//         subject: "Email Verification",
//         text: `please click the following link to verify your email http://localhost:3000/verify/${verificationToken}`,
//     }

//     try {
//         await transporter.sendMail(mailOptions);
//     } catch (error) {
//         console.log("error sending email", error);
//     }
// }

