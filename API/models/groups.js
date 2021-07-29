const Sequelize = require('sequelize');
const db        = require('../utils/DBConnection');

const Groups = db.define('team', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = Groups;