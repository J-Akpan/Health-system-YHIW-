const Sequelize = require("sequelize")
const db = require("../config/dbConfig")

// creating patient model
const Doctor = db.define('Doctor', {
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
        type: Sequelize.DATEONLY,
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
    area_of_specialty:{
        type: Sequelize.STRING,
        allowNull: false
    },
    qualification:{
        type: Sequelize.STRING,
        allowNull: false
    },
    current_place_of_engagement:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Own_private_facility:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Doctor
