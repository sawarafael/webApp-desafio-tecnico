const express = require('express');
const Authroute = express.Router();

const signUpController = require('./../controllers/auth/signup');

Authroute.post('/signup', signUpController.signupCollab);

module.exports = Authroute;