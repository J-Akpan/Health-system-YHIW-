const Patient = require("../models/PatientModel");
require("body-parser");
const Joi = require("joi");
const {
  validity,
  profileUpdate,
  createValidity,
} = require("../controllers/formValidation");
const { where } = require("sequelize");
const passport = require("passport");
const bcrypt = require("bcryptjs");

class PatientClass {
  //method to handle route

  // Basically to render the loging page
  loginPage = (req, res) => {
    try {
      res.send("i am making progress");
    } catch (error) {
      console.log(error);
    }
  };

  // create patient account
  createPatient = async (req, res) => {
    const {
      id,
      firstname,
      lastname,
      email,
      password,
      sex,
      date_of_birth,
      phone,
      address,
      residential_LGA,
      residential_state,
      illness,
      current_medication,
      past_medication,
    } = req.body;

    // validating input
    const check = createValidity.validate(req.body);
    if (check.error) {
      return res.status(404).send(check.error.details[0].message);
    }
//checking for existing members
    // const userExist = await Patient.findOne({ email });
    // if (userExist) {
    //   return res.status(409).send("User already registered");
    // }




    // create new user functujin

    try {
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hashSync(password, 10);

      //create new user in the database
      return res.status(200).send(
       Patient.create({
          id,
          firstname,
          lastname,
          email,
          password: hashedPassword,
          sex,
          date_of_birth,
          phone,
          address,
          residential_LGA,
          residential_state,
          illness,
          current_medication,
          past_medication,
        })
      );
    } catch (error) {
      console.log(error)
      return res.status(500).send("Error creating patient");
    } //try
  };

  //login method
  login = (req, res) => {
    const check = validity.validate(req.body);
    if (check.error) {
      return res.status(404).send(check.error.details[0].message);
    } else {
      return res.status(200).send(
        Patient.findAll({
          where: {
            email: req.body.email,
            password: req.body.password,
          },
        })
      );
    }
  };

  // method to update patient profile

  profileUpdate = (req, res) => {
    const {
      firstname,
      lastname,
      email,
      sex,
      date_of_birth,
      phone,
      address,
      residential_LGA,
      residential_state,
      illness,
      current_medication,
      past_medication,
    } = req.body;

    const check = profileUpdate.validate(req.body);
    if (check.error) {
      return res.status(404).send(check.error.details[0].message);
    } else {
      return res.status(200).send(
        Patient.update(
          {
            firstname,
            lastname,
            // email,
            sex,
            date_of_birth,
            phone,
            address,
            residential_LGA,
            residential_state,
            illness,
            current_medication,
            past_medication,
          },
          {
            where: {
              email: req.body.email,
            },
          }
        )
      );
    }
  }; // update profile method end
} //class close

// instantite instances of the class
const patientClasss = new PatientClass();

//module export
module.exports = {
  patientClasss,
};
