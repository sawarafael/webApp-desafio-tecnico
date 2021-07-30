const express = require('express');
const UpdateRoute = express.Router();

const addDataController = require('./../controllers/updates/addData');

UpdateRoute.post('/add-data', addDataController.addData);

module.exports = UpdateRoute;