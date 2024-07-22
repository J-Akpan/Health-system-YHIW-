const express = require("express")
const db = require("./config/dbConfig.js")
const bodyParser = require('body-parser')

// imports of models
// require("./models/PatientModel")
require("./models/DoctorModel.js")
require("./models/Appointment.js")


//create express application 
const app = express()

//body-parser middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// routes
app.use('/patient', require('./routes/patientRoute.js'))

//port declaration
const PORT = process.env.PORT || 3000


//running the server
app.listen(PORT, ()=>{
    console.log(`Application runnin on port ${PORT}`)
})