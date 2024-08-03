const { body, validationResult } =  require("express-validator")

exports.validateUserSignUp = [
body("firstName")
    .trim()
    .notEmpty().withMessage('First name cannot be empty')
    .isLength({ min: 3 }).withMessage('First name must be at least 3 characters long')
    .escape(),

body("lastName")
    .trim()
    .notEmpty().withMessage('Last name cannot be empty')
    .isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long')
    .escape(),

body("phoneNumber")
    .trim()
    .notEmpty().withMessage('Phone number cannot be empty')
    .isLength({ min: 10 }).withMessage('Phone number must be at least 10 characters long')
    .escape(),

body("email")
    .notEmpty().withMessage('email cannot be empty')
    .isEmail().withMessage('Invalid email format')
    .normalizeEmail()
    .trim()
    .escape(),

body("password")
    .notEmpty().withMessage('password cannot be empty')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .matches(/\d/).withMessage('Password must contain a number')
    .trim()
    .escape(),

body('confirmPassword')
    .trim()
    .notEmpty().withMessage('Confirm password cannot be empty')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Both password must be same!');
      }
      return true;
    }),
]

exports.validateUserSignIn = [ 
    body("email")
        .notEmpty().withMessage('email cannot be empty')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail()
        .trim()
        .escape(),
    
    body("password")
        .notEmpty().withMessage('password cannot be empty')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .matches(/\d/).withMessage('Password must contain a number')
        .trim()
        .escape(),
]

exports.validatePhoneNumber = [ 
    body("phoneNumber")
    .trim()
    .notEmpty().withMessage('Phone number cannot be empty')
    .isLength({ min: 10 }).withMessage('Phone number must be at least 10 characters long')
    .escape(),
]

exports.userValidation = (req, res, next) => {
    const result = validationResult(req).array();
    if (!result.length) return next();
  
    const error = result[0].msg;
    res.json({ success: false, message: error });
  };
  