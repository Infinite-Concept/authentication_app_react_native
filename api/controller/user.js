const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const User = require("../models/user")


exports.createUser = async (req, res) => {
    try {

        const {firstName, lastName, phoneNumber, email, password, confirmPassword} = req.body

        const user = await User.findOne({email})

        if(user){
            return res.json({
                success: false,
                message: 'This email is already in use, try sign-in',
            });
        }

        const number = await User.findOne({phoneNumber})

        if(number){
            return res.json({
                success: false,
                message: 'This phone number is already in use, try sign-in',
            });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        if(!hashedPassword){
            return res.json({
                success: false,
                message: 'Try again later',
            });
        }

        const savedUser = await User({
            firstName,
            lastName,
            phoneNumber,
            email,
            password: hashedPassword
        })

        await savedUser.save();

        res.json({ success: true, message: "Account successfully created" });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"})
    }
}

exports.userSignIn = async (req, res) => {
    try {

        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.json({
                success: false,
                message: 'User not found, try sign-up',
            });
        }

        const savedPassword = await bcrypt.compare(password, user.password)

        if (!savedPassword){
            return res.json({
              success: false,
              message: 'email / password does not match!',
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        const userInfo = {
            lastName: user.lastName,
            firstName: user.firstName,
            phoneNumber: user.phoneNumber,
            email : user.email
          };
        
          res.json({ success: true, user: userInfo, token });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"})
    }
}

exports.phoneNumberSignIn = async (req, res) => {
    try {

        const {phoneNumber} = req.body

        const user = await User.findOne({phoneNumber})

        if(!user){
            return res.json({
                success: false,
                message: 'User not found, try sign-up',
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        const userInfo = {
            lastName: user.lastName,
            firstName: user.firstName,
            phoneNumber: user.phoneNumber,
            email : user.email
        };
        
          res.json({ success: true, user: userInfo, token });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"})
    }
}