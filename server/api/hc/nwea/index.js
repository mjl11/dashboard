'use strict';

var express = require('express');
var controller = require('./hc.nwea.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;