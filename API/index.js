const express   = require('express');
const bp        = require('body-parser');
const co        = require('colors');
const cors      = require('cors');
const helmet    = require('helmet');
const app       = express();
const http      = require('http').Server(app);

const config = require('./configs/configs');
const conn = require('./utils/DBConnection');

const authRoute = require('./routes/AuthRoute');
const listRoute = require('./routes/ListsRoute');

app.use(cors());
app.use(helmet());

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.get('/', (req, res) => {
    res.send("<h1>Bem vindo a página inicial do Servidor - API!</h1> \n" + 
    "\n <h3>Nada de importante acontece aqui.</h3> \n"
    )
});

app.use('/auth', authRoute);
app.use('/list', listRoute);

http.listen(config.PORT, () => {
    console.log(co.blue(`\n\n API rodando no endereço: ` + co.bold(`http://localhost:${config.PORT}`)
    + `\n Inicializando Módulos... \n`
    ))
});

conn
    .authenticate()
    .then(() => {
        console.log(co.bgGreen.black(`CONEXÃO COM O BANCO DE DADOS REALIZADA COM SUCESSO!
            \n`))
    }).catch((err) => {
        console.log(co.bgRed.white(`\nHOUVE UM ERRO COM A CONEXÃO COM O BANCO DE DADOS! \n`))
    })

const a = require('./models/collaborators/collabData')

/*
*
*Este módulo iria inicializar as models dentro do Banco de Dados.
*
conn
    .sync({
        logging: console.log,
        force: true
    }).catch((err) => {
        console.log(err)
    })
*/
