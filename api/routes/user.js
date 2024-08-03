const router = require("express").Router()
const {createUser, userSignIn, phoneNumberSignIn} = require("../controller/user")
const {validateUserSignUp, validateUserSignIn, userValidation, validatePhoneNumber } = require("../middleware/Validation")

router.post("/createUser", validateUserSignUp, userValidation, createUser )
router.post("/userSignIn", validateUserSignIn, userValidation, userSignIn )
router.post("/phoneNumberSignIn", validatePhoneNumber, userValidation, phoneNumberSignIn )

module.exports = router
