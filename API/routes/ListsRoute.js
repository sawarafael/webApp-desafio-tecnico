const express = require('express');
const ListRoute = express.Router();

const collabListController = require('./../controllers/listings/byCollab');

ListRoute.get('/by-collab', collabListController.showAllCollabs);
ListRoute.get('/file-collab', collabListController.showThatCollabFile);

module.exports = ListRoute;