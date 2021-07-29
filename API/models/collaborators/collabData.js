const Sequelize = require('sequelize');
const db        = require('../../utils/DBConnection');

const Collaborator = require('./collabUser');
const CollaboratorFiles = require('./collabFiles');
const Departament = require('./../departaments');
const Groups = require('./../groups');

const CollaboratorData = db.define('collabData', {
    photoImage: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    }    
}, {
    timestamps: false
})

CollaboratorData.belongsTo(Collaborator, {
    foreignKey: {
        allowNull: false
    }
})

CollaboratorData.belongsTo(Departament, {
    foreignKey: {
        allowNull: false
    }
})

CollaboratorData.belongsTo(Groups, {
    foreignKey: {
        allowNull: false
    }
})

CollaboratorData.belongsTo(CollaboratorFiles, {
    foreignKey: {
        allowNull: true
    }
})

module.exports = CollaboratorData;