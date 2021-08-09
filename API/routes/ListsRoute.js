const express = require('express');
const ListRoute = express.Router();

const collabListController = require('./../controllers/listings/byCollab');
const collabPerfilController = require('./../controllers/listings/collabData');

ListRoute.get('/by-collab/', collabListController.showAllCollabs);
ListRoute.get('/file-collab/', collabListController.showThatCollabFile);

ListRoute.get('/perfil/', collabPerfilController.showThatCollab);

module.exports = ListRoute;