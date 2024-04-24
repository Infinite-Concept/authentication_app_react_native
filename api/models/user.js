const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
        default: false,
    },
    dateCreated:{
        type: Date, default: Date.now
    },

    verificationToken: String
})

const User = mongoose.model("User", userSchema)

module.exports = User;