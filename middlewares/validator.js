const { check, validationResult } = require("express-validator");

const validateSignupRequest = [
    check('email').
        isEmail()
        .withMessage("Valid Email is required!!"),
]

const isRequestValidated = (req, res, next)=>{
    const errors = validationResult(req);
    if(errors.array().length > 0 ){
        return res.status(210).json({
            msg: errors.array()[0].msg,
        });
    }
    next() ; 
}

module.exports = {validateSignupRequest, isRequestValidated};