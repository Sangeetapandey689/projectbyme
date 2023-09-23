const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    phoneNo: {
        type: Sequelize.INTEGER, // here its will be the Inetger not String
        unique: true
    },
    date: Sequelize.DATE,
    time: Sequelize.TIME // Corrected the data type to Sequelize.TIME
});

module.exports = User;