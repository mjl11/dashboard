'use strict';

var express = require('express');
var controller = require('./stmath.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('staff'), controller.index);

module.exports = router;