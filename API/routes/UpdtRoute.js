const express = require('express');
const UpdateRoute = express.Router();

const addDataController = require('./../controllers/updates/addData');
const updSectorController = require('./../controllers/updates/updSector');

UpdateRoute.post('/add-data', addDataController.addData);
UpdateRoute.post('/add-file', addDataController.addFile);

UpdateRoute.patch('/upd-sector', updSectorController.updateDepartament);

module.exports = UpdateRoute;