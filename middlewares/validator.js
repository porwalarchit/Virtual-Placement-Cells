const { check, validationResult } = require("express-validator");

const validateCollegeSignupRequest = [
    check('collegeName')
        .notEmpty()
        .withMessage("Please Enter College Name"),

    check('email')
        .notEmpty()
        .isEmail()
        .withMessage("Valid Email is required!!"),

    check('password')
        .notEmpty()
        .withMessage("Please enter Password"),

    check('confirmpassword')
        .notEmpty()
        .withMessage("Please enter Confirm Password")
]

const validateCompanySignupRequest = [
    check('email')
        .notEmpty()
        .isEmail()
        .withMessage("Valid Email is required!!"),

    check('password')
        .notEmpty()
        .withMessage("Please enter Password"),

    check('confirmpassword')
        .notEmpty()
        .withMessage("Please enter Confirm Password")
]

const validateSigninRequest = [
    check('email')
        .notEmpty()
        .withMessage("Email is required!!"),

    check('password')
        .notEmpty()
        .withMessage("Password is required")
]

const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(210).json({
            msg: errors.array()[0].msg,
        });
    }
    next();
}

module.exports = { validateCollegeSignupRequest, validateCompanySignupRequest, validateSigninRequest, isRequestValidated };