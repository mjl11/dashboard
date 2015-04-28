'use strict';

var express = require('express');
var controller = require('./infraction.by.staff.this.week.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;