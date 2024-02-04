const Joi = require("joi");

const userRegistrationValidate = (req, res, next) => {
  const Schema = Joi.object({
    firstName: Joi.string().min(4).max(20).required(),
    lastName: Joi.string().min(4).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).alphanum().required(),
  });

  const { error, value } = Schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }

  
  next();
};
const userLoginValidate = (req, res, next) => {
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).alphanum().required(),
  });

  const { error, value } = Schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }

  
  next();
};



module.exports = {
  userRegistrationValidate,
  userLoginValidate,
};
