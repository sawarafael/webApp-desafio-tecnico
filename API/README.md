## **API - Desafio Técnico WebApp / Perfil de Colaboradores**

#### 1.0.0v

API destinada para uso do aplicativo *Perfil de Colaboradores WebApp*, este ReadMe é destinado para especificar exclusivamente as funcionalidades desta API em prol de auxiliar no desenvolvimento do lado do Cliente com a sua devida integração.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

### 1º - Instalando e Configurando

Crie um Banco de Dados com o nome de *"collabsDB"* e em seguida vá até o arquivo ***"utils/DBConnection.js"*** e altere os seguintes campos:


DB_NAME : *collabsDB*

DB_USER : ***Nome do Usuário MySQL proveniente***

DB_PASS : ***Senha do Usuário MySQL proveniente***

DB_HOST : ***localhost***


Salve este arquivo e em seguida vá até ao outro arquivo com o nome de ***"./index.js"*** e retire esta parte do código da parte comentada:

~~~javascript
conn
    .sync({
        logging: console.log,
        force: true
    }).catch((err) => {
        console.log(err)
    })
~~~

Após isto, instale as dependêncas da API e execute-o com os seguintes comandos:
~~~bash
npm install
node index
~~~

As tabelas do Banco de Dados *collabsDB* serão automáticamente criadas e prontas para o trabalho, no entanto, encerre a execução e volte ao arquivo *./index.js* e comente a parte do código acima (ou remova-o).

Feito isto, você pode manter a API executando em escuta de desenvolvimento com o comando:
~~~bash
nodemon index
~~~

### 2º - Funcionalidade das Rotas

|   Nome	|   Funcionalidade	|   Rotas	|   Entrada	|  Saída 	| Erros Esperados  |
|:--:	|:--:	|  :-:	|:-:	|:--:	|:--:   |
|   Registro de Colaboradores	|   Registra novos Colaboradores.	|   /auth/signup	|   ***body.username*** ± ***body.email*** ± ***body.password*** ± ***body.photo*** ± ***body.age*** ± ***body.description*** ± ***body.status*** ± ***body.departamentId*** ± ***body.groupId*** 	|   Status 200  ***"Colaborador cadastrado."***	|   Status 409 ***"Falha em cadastrar o Colaborador"*** ± Status 404 ***"Colaborador não existe."*** |
|   Autenticação de Colaboradores	|   Realiza o Login do Colaborador.	|   /auth/signin	|   ***req.body.username***  ***body.password***	|   Status 200 ***"Sucesso!"*** / ID do Colaborador Autenticado'*'	|  Status 404 ***"Colaborador não existe!"*** ± Status 404 ***"Senha Inválida"*** ± Status 400 ***"Colaborador não encontrado"*** |
|   Listagem de Colaboradores	|   Lista todos os Colaboradores registrados, podendo filtrar por Departamento, Grupo, Nome e Email.'**' 	|   /list/by-collab	|   ***body.departamentFilter*** ***body.groupFilter*** ***body.nameFilter*** ***body.emailFilter***	|   Status 200 / Listagem Filtrada de Colaboradores	|  Status 404 ***"Não existem Colaboradores"***  ± Status 400 ***"Colaboradores não encontrados"***
|   	|   	|   	|   	|   	|
|   	|   	|   	|   	|   	|