'use strict';

var express = require('express');
var controller = require('./behavior.controller');
var InfractionByStaffLastWeekController = require('./infraction.by.staff.last.week/infraction.by.staff.last.week.controller');
var InfractionByStaffThisWeekController = require('./infraction.by.staff.this.week/infraction.by.staff.this.week.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('staff'), controller.index);
router.get('/infraction.by.staff.last.week', auth.hasRole('staff'), InfractionByStaffLastWeekController.index);
router.get('/infraction.by.staff.this.week', auth.hasRole('staff'), InfractionByStaffThisWeekController.index);

module.exports = router;