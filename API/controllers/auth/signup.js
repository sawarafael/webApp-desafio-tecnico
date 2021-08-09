const collabUser = require('./../../models/collaborators/collabUser');
const collabData = require('./../../models/collaborators/collabData');
const collabFile = require('./../../models/collaborators/collabFiles');

module.exports = {
    /*
    Faz uma verificação se já existe um colaborador com o mesmo email,
     evitando duplicatas;
    Se caso seja realmente um novo colaborador, ele irá adicionar dados nulos ou
     com alguns dados para as tabelas correspondentes e confirmar que o colaborador
      foi criado com sucesso;
    */
    signupCollab (req, res) {
        collabUser.findOne({
            where: {
                email: req.body.email.trim().toLowerCase()
            },
            atributes: ['id']
        }).then(collab => {
            if(collab) {
                res.status(401).json({ err: "Já existe um Colaborador usando este mesmo Email." })
            } else {
                collabUser.create({
                    username:           req.body.username,
                    email:              req.body.email,
                    password:           req.body.password
                }).then(collabSign => {
                    collabData.create({
                        photoImage:     req.body.photo,
                        age:            req.body.age,
                        description:    req.body.description,
                        status:         req.body.status,
                        collabUserId:   collabSign.id,
                        departamentId:  req.body.departament,
                        teamId:         req.body.group
                    })
                    collabFile.create({
                        id:             collabSign.id,
                        name:           req.body.name,
                        file:           req.body.file
                    })
                    
                    res.status(200).json({ sucess: "Colaborador cadastrado." })
                }).catch(err => {
                    res.status(409).json({ err: "Falha em cadastrar o colaborador." })
                })
            }
        }).catch(err => {
            res.status(409).json({ err: "Colaborador não existe." });
        })
    }
}
