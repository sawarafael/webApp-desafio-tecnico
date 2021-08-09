const collabUser = require('../../models/collaborators/collabUser');
const collabData = require('../../models/collaborators/collabData');

module.exports = {
    /*
    Esta função permite que o colaborador altere ou o departamento ou o grupo do 
     colaborador;
    */
    updateDepartament (req, res) {
        collabUser.findOne({
            where: {
                id: req.query.id
            },
            attributes: ['id']
        }).then(collab => {
            if (!collab) {
                res.status(404).json({ err: "Colaborador não existe!" })
            }

            if (req.body.group) {
                collabData.update({
                    teamId   :   req.body.group,
                    status   :   req.body.status
                }, {
                    where: {
                        id: collab.id
                    }
                }).catch(err => {
                    res.status(400).json({ err: "Erro em atualizar o Grupo do qual o Colaborador pertence." })
                })
                res.status(200).json({ msg: "Sucesso em Atualizar o Grupo do Colaborador." })
            } else if (req.body.departament) {
                collabData.update({
                    departamentId   :   req.body.departament,
                    status          :   req.body.status
                }, {
                    where: {
                        id: collab.id
                    }
                }).catch(err => {
                    res.status(400).json({ err: "Erro em atualizar o Departamento do qual o Colaborador pertence." })
                })
                res.status(200).json({ msg: "Sucesso em Atualizar o Departamento do Colaborador." })
            }
        }).catch(err => {
            res.status(401).json({ err: "Colaborador não encontrado." })
        })
    }
}