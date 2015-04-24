'use strict';

var express = require('express');
var AbsencesController = require('./absences/absences.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/absences', auth.hasRole('staff'), AbsencesController.index);

module.exports = router;