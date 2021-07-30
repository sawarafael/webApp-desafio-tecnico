const express = require('express');
const UpdateRoute = express.Router();

const addDataController = require('./../controllers/updates/addData');

UpdateRoute.post('/add-data', addDataController.addData);
UpdateRoute.post('/add-file', addDataController.addFile);

module.exports = UpdateRoute;