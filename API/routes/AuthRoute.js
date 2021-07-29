const express = require('express');
const Authroute = express.Router();

const signUpController = require('./../controllers/auth/signup');
const signInController = require('./../controllers/auth/signin');

Authroute.post('/signup', signUpController.signupCollab);
Authroute.get('/signin', signInController.signinCollab);

module.exports = Authroute;