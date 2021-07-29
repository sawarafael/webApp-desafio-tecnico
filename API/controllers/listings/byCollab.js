const collabUser = require('./../../models/collaborators/collabUser');
const collabData = require('./../../models/collaborators/collabData');
const collabFile = require('./../../models/collaborators/collabFiles');
const departament = require('./../../models/departaments');
const groups = require('./../../models/groups');

collabData.belongsTo(collabUser, {
    allowNull: false
})

collabUser.hasOne(collabData, {
    onDelete: "cascade",
    onUpdate: "cascade"
})

module.exports = {
    showAllCollabs (req, res) {
        collabUser.findAll({
            where: {
                id: req.query.id
            },
            include: [
                {
                    model: collabData, attributes: [
                        'photoImage',
                        'age',
                        'description',
                        'status'
                    ],
                    include: [
                        {
                            model: departament, attributes: ['name']
                        },
                        {
                            model: groups, attributes: ['name']
                        }
                    ]
                }
            ],
            attributes: ['id', 'username', 'email']
        }).then(collab => {
            if(!collab) {
                res.status(404).json({ err: "Colaborador não existe!" })
            } else {
                res.status(200).json({ collab })                
            }

        }).catch(err => {
            res.status(400).json({ err: "Colaborador não encontrado." })
            console.log(err)
        })
    },

    showThatCollabFile (req, res) {
        collabUser.findOne({
            where: {
                id: req.query.id
            },
            attributes: ['id']
        }).then(collab => {
            if(!collab) {
                res.status(404).json({ err: "Colaborador não existe!" })
            } else {
                collabFile.findOne({
                    where: {
                        id: collab.id
                    }
                }).then(exist => {
                    res.status(200).json({ exist })
                })               
            }
        })
    }
}