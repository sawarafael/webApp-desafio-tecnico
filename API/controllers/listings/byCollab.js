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
                const collabData = collab.map(dataTD => {
                   const data = {
                       Id           : dataTD.id,
                       Username     : dataTD.username,
                       Email        : dataTD.email,
                       Photo        : dataTD.collabDatum.photoImage,
                       Age          : dataTD.collabDatum.age,
                       Bio          : dataTD.collabDatum.description,
                       Status       : dataTD.collabDatum.status,
                       Departament  : dataTD.collabDatum.departament.name,
                       Group        : dataTD.collabDatum.team.name                      
                   }
                    return data
                })

                const collabFilter = collabData.filter(filter => {
                    
                    if (req.body.departamentFilter) {
                        return filter.Departament === req.body.departamentFilter;
                    } else if (req.body.groupFilter) {
                        return filter.Group === req.body.groupFilter;
                    } else {
                        return filter;
                    }
                })

                res.json({ collabFilter })
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
