const Sequelize = require("sequelize")
const db = require("../config/dbConfig")

// creating patient model
const Patient = db.define('Patient', {
    id:{
        type:Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
       
    },
    firstname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sex:{
        type: Sequelize.STRING,
        allowNull: false
    },
    date_of_birth:{
        type: Sequelize.DATE,
        allowNull: false
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false
    },
    residential_LGA:{
        type: Sequelize.STRING,
        allowNull: false
    },
    residential_state:{
        type: Sequelize.STRING,
        allowNull: false
    },
    illness:{
        type: Sequelize.STRING,
        allowNull: false
    },
    // symtoms:{
    //     type: Sequelize.STRING,
    //     allowNull: true
    // },
    current_medication:{
        type: Sequelize.STRING,
        allowNull: false
    },
    past_medication:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Patient
