'use strict';

var express = require('express');
var controller = require('./behavior.controller');
var InfractionByStaffLastWeekController = require('./infraction.by.staff.last.week/infraction.by.staff.last.week.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('staff'), controller.index);
router.get('/infraction.by.staff.last.week', InfractionByStaffLastWeekController.index);

module.exports = router;