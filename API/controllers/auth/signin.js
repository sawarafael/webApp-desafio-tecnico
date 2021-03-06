const { Op } = require('sequelize');
const collabUser = require('./../../models/collaborators/collabUser');

module.exports = {
    //Faz a autenticação do Colaborador e retorna para ele seu próprio ID;
    signinCollab (req, res) {
        collabUser.findOne({
            where: {
                email: req.body.email    
            },
            attributes: ['id', 'username', 'email', 'password']
        }).then(collab => {
            if(!collab) {
                res.status(404).json({ err: "Colaborador não existe!" })
            }

            if(req.body.password === collab.password) {
                res.status(200).json({ sucess: 'Sucesso!', collabId: collab.id })
            } else {
                res.status(404).json({ err: "Senha Inválida." })
            }
        }).catch(err => {
            res.status(400).json({ err: "Colaborador não encontrado." })
        })
    }
}