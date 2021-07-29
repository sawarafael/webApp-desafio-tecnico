const Sequelize = require('sequelize');
const db        = require('../../utils/DBConnection');

const CollaboratorFiles = db.define('collabFiles', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    file: {
        type: Sequelize.BLOB,
        allowNull: true
    }
})

module.exports = CollaboratorFiles;