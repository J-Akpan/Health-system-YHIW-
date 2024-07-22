const Joi = require("joi");

// login validationfunction
const validity = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

//create patient

const createValidity = Joi.object({
  id: Joi.string().min(3).required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  sex: Joi.string().required(),
  date_of_birth: Joi.string().required(),
  phone: Joi.string().required().max(15).min(11),
  address: Joi.string().required(),
  residential_LGA: Joi.string().required(),
  residential_state: Joi.string().required(),
  illness: Joi.string().required(),
  current_medication: Joi.string().required(),
  past_medication: Joi.string().required(),
});

// patient profile update

const profileUpdate = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  sex: Joi.string().required(),
  date_of_birth: Joi.string().required(),
  phone: Joi.string().required().max(15).min(11),
  address: Joi.string().required(),
  residential_LGA: Joi.string().required(),
  residential_state: Joi.string().required(),
  illness: Joi.string().required(),
  current_medication: Joi.string().required(),
  past_medication: Joi.string().required(),
});

module.exports = {
  validity,
  profileUpdate,
  createValidity,
};

// id, firstname, lastname, sex, date_of_birth, phone, address, residential_LGA,
// residential_state, illness, symtoms, current_medication,past_medication
