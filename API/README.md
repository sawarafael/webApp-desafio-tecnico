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

Após isto, instale as dependêncas da API e execute-o com os seguintes comandos, respectivamente:
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

|   Nome	|   Funcionalidade	|   Rotas	|   Entrada	|  Saída 	|
|:--:	|:--:	|  :-:	|:-:	|:--:	|
|   Registro de Colaboradores	|   Registra novos Colaboradores. (CREATE/POST)	|   /auth/signup	|   ***body.username*** ± ***body.email*** ± ***body.password*** ± ***body.photo*** ± ***body.age*** ± ***body.description*** ± ***body.status*** ± ***body.departamentId*** ± ***body.groupId*** 	|   Status 200  ***"Colaborador cadastrado."***	|
|   Autenticação de Colaboradores	|   Realiza o Login do Colaborador. (READ/GET)	|   /auth/signin	|   ***body.username***  ***body.password***	|   Status 200 ***"Sucesso!"*** / ID do Colaborador Autenticado'*'	| 
|   Listagem de Colaboradores	|   Lista todos os Colaboradores registrados, podendo filtrar por Departamento, Grupo, Nome e Email.'**'(READ/GET) 	|   /list/by-collab	|   ***body.departamentFilter*** ***body.groupFilter*** ± ***body.nameFilter*** ± ***body.emailFilter***	|   Status 200 / Listagem Filtrada de Colaboradores	|
|   Adicionar Dados	|   Adiciona os Dados restantes ao perfil do Colaborador.(UPDATE/DELETE/PATCH)	|   /upd/add-data	|  ***"body.photo"*** ± ***"body.age"*** ± ***body.bio*** ±  ***body.status***	|   Status 200 ***"Dados do Colaborador Alterados com Sucesso"***	|
|   Adicionar Documento	|   Adiciona o Documento restante ao perfil do Colaborador.(UPDATE/DELETE/PATCH)	|   /upd/add-file	|   ***"body.name"***   ± ***"body.file"***	|   Status 200  ***"Arquivo do Colaborador Alterado com Sucesso"***	|
|   Atualizar Setores	|   Atualiza os Setores(Departamento ou Grupo) dos quais o Colaborador trabalha.(UPDATE/PATCH)	|   /upd/upd-sector	|   ***"body.group"*** ± ***"body.departament"*** ± ***"body.status***	| Status 200 ***"Sucesso em Atualizar o Departamento/Grupo do Colaborador."***

'*' - Este ID do Colaborador é utilizado para autenticar o usuários na utilização de todas as outras rotas (exceto a Rota de Registro).

'**' - O filtro deve ocorrer na adição de alguma entrada, sem nenhuma entrada, o retorno será uma lista geral de todos os colaboradores.

### 3º - Versionamento e Correções
**1.0.0v**
(x.y.z) →  **X** = Concatenação / **Y**= Adição / **Z** = Correção

___________________________________________________
**Nenhuma Feature registrada por enquanto...**
___________________________________________________
**Caso ocorra algum erro durante a execução da API, reportar em "Issues" deste repositório!**