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
                res.status(404).json({ err: "Não existem Colaboradores!" })
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
                    
                    if (req.query.departamentFilter) {
                        return filter.Departament === req.query.departamentFilter;
                    } else if (req.query.groupFilter) {
                        return filter.Group === req.query.groupFilter;
                    } else if (req.query.nameFilter) {
                        return filter.Username === req.query.nameFilter;
                    } else if (req.query.emailFilter) {
                        return filter.Email === req.query.filterEmail;
                    } else {
                        return filter
                    }
                })

                res.status(200).json({ collabFilter })
            }
        }).catch(err => {
            res.status(404).json({ err: "Colaboradores não encontrados." })
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
