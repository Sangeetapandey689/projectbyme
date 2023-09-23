const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking_appointment', 'root', 'Geeta@6204', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;