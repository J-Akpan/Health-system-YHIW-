const express = require("express")
const Patient = require("../models/PatientModel")
const patients = require("../controllers/patientController")


// create express router
const router = express.Router();



// routes
router.route('/profile')
    .get(patients.patientClasss.loginPage) //working
    .post(patients.patientClasss.login) //working
    .put(patients.patientClasss.profileUpdate) //working

router.route('/createPatient')
    .post(patients.patientClasss.createPatient)//working
// export router as module
module.exports = router