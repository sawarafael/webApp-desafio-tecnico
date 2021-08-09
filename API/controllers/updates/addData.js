const collabUser = require('./../../models/collaborators/collabUser');
const collabData = require('./../../models/collaborators/collabData');
const collabFile = require('./../../models/collaborators/collabFiles');

module.exports = {
    /*
    Esta função permite que o colaborador adicione ou altere todos os seus dados;
    */
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
    },    
    /*
    Esta função permite que o colaborador adicione ou altere o seu arquivo;
    */
    addFile (req, res) {
        collabUser.findOne({
            where: {
                id: req.query.id
            },
            attributes: ['id']
        }).then(collab => {
            if (!collab) {
                res.status(404).json({ err: "Colaborador não existe!" })
            }

            const newFile = {
                name    : req.body.name,
                newFile : req.body.file,
            }

            collabFile.update({
                name    : newFile.name,
                file    : newFile.file
            }, {
                where: {
                    id: collab.id
                }
            }).catch(err => {
                res.status(400).json({ err: "Erro em atualizar o arquivo do Colaborador." })
            })
            res.status(200).json({ msg: "Arquivo do Colaborador Alterado com Sucesso" })
        }).catch(err => {
            res.status(401).json({ err: "Colaborador não encontrado." })
        })
    }
}