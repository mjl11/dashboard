'use strict';

var express = require('express');
var BehaviorController = require('./behavior/behavior.controller');
var StudentOHController = require('./officehours/studentoh.controller');
var NameGameController = require('./namegame/namegame.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/behavior/:email', auth.hasRole('student'), BehaviorController.show);
router.get('/officehours/:email', auth.hasRole('student'), StudentOHController.show);
router.get('/random', auth.hasRole('staff'), NameGameController.index);

module.exports = router;