'use strict';

var express = require('express');
var belowcGradesController = require('./belowc/belowc.controller');
var GPAController = require('./gpa/gpa.controller');
var histogramController = require('./histogram/histogram.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/belowc', auth.hasRole('staff'), belowcGradesController.index);
router.get('/currentgpa', auth.hasRole('staff'), GPAController.index);
router.get('/histogram', auth.hasRole('staff'), histogramController.index);
module.exports = router;