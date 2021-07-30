const collabUser = require('./../../models/collaborators/collabUser');
const collabData = require('./../../models/collaborators/collabData');
const collabFile = require('./../../models/collaborators/collabFiles');

module.exports = {
    addData (req, res) {
        collabUser.findOne({
            where: {
                id: req.query.id
            },
            attributes: ['id']
        }).then(collab => {
            if(!collab) {
                res.status(404).json({ err: "Colaborador não existe!" })
            }

            const newData = {
                newPhoto        : req.body.photo,
                newAge          : req.body.age,
                newBio          : req.body.bio,
                newStatus       : req.body.status
            }

            collabData.update({
                photoImage      : newData.newPhoto,
                age             : newData.newAge,
                description     : newData.newBio,
                status          : newData.newStatus
            }, {
                where: {
                    collabUserId: collab.id
                }
            }).catch(err => {
                res.status(400).json({ err: "Erro em atualizar os dados do Colaborador." })
            })
            res.status(200).json({ msg: "Dados do Colaborador Alterados com Sucesso" })
        }).catch(err => {
            res.status(401).json({ err: "Colaborador não encontrado." })
        })
    }
}