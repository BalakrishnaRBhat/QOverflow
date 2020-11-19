const Joi = require('@hapi/joi');

// Register validator
const registerValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(25).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')).required()
    });
    return schema.validate(data);
}

// Login validator
const loginValidator = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')).required()   
    });
    return schema.validate(data);
}

module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;

