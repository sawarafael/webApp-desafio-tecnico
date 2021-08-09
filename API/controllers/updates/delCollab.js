const collabUser = require('./../../models/collaborators/collabUser');
const collabData = require('./../../models/collaborators/collabData');
const collabFile = require('./../../models/collaborators/collabFiles');

module.exports = {
    /*
    Esta função pesquisa por um colaborador pelo seu ID, se ele existir, irá deletar
     seus dados;
    */
    removeCollab (req, res) {
        collabUser.findOne({
            where: {
                id: req.query.id
            },
            attributes: ['id']
        }).then(collab => {
            if (!collab) {
                res.status(404).json({ err: "Colaborador não existe!" })
            }

            collabUser.destroy({
                where: {
                    id: collab.id
                }
            })

            collabData.destroy({
                where: {
                    collabUserId: collab.id
                }
            })

            collabFile.destroy({
                where: {
                    id: collab.id
                }
            })

            res.status(200).json({ msg: "Colaborador removido com sucesso." })

        }).catch(err => {
            res.status(401).json({ err: "Colaborador não encontrado." })
        })
    }
}