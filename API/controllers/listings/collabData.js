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
    /*
    Esta função pesquisa por um colabarador pelo seu ID, se ele existir, retorna 
     seus dados;
    */
    showThatCollab (req, res) {
        collabUser.findOne({
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
                res.status(404).json({ err: "Este Colaborado não existe!" })
            } else {
                const data = {
                    Id           : collab.id,
                    Username     : collab.username,
                    Email        : collab.email,
                    Photo        : collab.collabDatum.photoImage,
                    Age          : collab.collabDatum.age,
                    Bio          : collab.collabDatum.description,
                    Status       : collab.collabDatum.status,
                    Departament  : collab.collabDatum.departament.name,
                    Group        : collab.collabDatum.team.name                      
                }   

                res.status(200).json({ data })
            }
        }).catch(err => {
            console.log(err)
            res.status(404).json({ err: "Colaborador não encontrado!" })
        })
    }
}
