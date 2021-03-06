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
const updtRoute = require('./routes/UpdtRoute');

app.use(cors());
app.use(helmet());

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.set('views', 'views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index')
})

app.use('/auth', authRoute);
app.use('/list', listRoute);
app.use('/updt', updtRoute);

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
