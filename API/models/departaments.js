const Sequelize = require('sequelize');
const db        = require('../utils/DBConnection');

const Departament = db.define('departament', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = Departament;