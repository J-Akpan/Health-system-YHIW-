const Sequelize = require("sequelize")
const db = require("../config/dbConfig")

// creating patient model
const Appointment = db.define('Appointment', {
    id:{
        type:Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
    doctorId:{
        type: Sequelize.STRING,
        allowNull: false
    },
    patientId:{
        type: Sequelize.STRING,
        allowNull: false
    },
    date:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    time:{
        type: Sequelize.TIME,
        allowNull: false
    },
    type:{
        //weda emmergency or regular
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        //success or not
        type: Sequelize.STRING,
        allowNull: false
    },
})


module.exports = Appointment
