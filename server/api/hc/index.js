'use strict';

var express = require('express');
var hcGPAController = require('./gpa/hc.gpa.controller');
var hcADAController = require('./ada/hc.ada.controller');
var hcCPSController = require('./cps/hc.cps.controller');
var hcTTMController = require('./ttm/hc.ttm.controller');
var hcArController = require('./ar/hc.ar.controller');
var hcReadingPlusController = require('./readingplus/hc.readingplus.controller');
var hcRetentionController = require('./retention/hc.retention.controller');
var hcSSHController = require('./ssh/hc.ssh.controller');
var hcNWEAController = require('./nwea/hc.nwea.controller');
var hcNWEAGrowthController = require('./nweagrowth/hc.nwea.growth.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/gpa', auth.hasRole('staff'), hcGPAController.index);
router.get('/ada', auth.hasRole('staff'), hcADAController.index);
router.get('/ar', auth.hasRole('staff'), hcArController.index);
router.get('/cps/ontrack', auth.hasRole('staff'), hcCPSController.index);
router.get('/ttm', auth.hasRole('staff'), hcTTMController.index);
router.get('/readingplus', auth.hasRole('staff'), hcReadingPlusController.index);
router.get('/retention', auth.hasRole('staff'), hcRetentionController.index);
router.get('/ssh', auth.hasRole('staff'), hcSSHController.index);
router.get('/nwea/progress/reading', auth.hasRole('staff'), hcNWEAController.reading);
router.get('/nwea/progress/math', auth.hasRole('staff'), hcNWEAController.math);
router.get('/nwea/progress/science', auth.hasRole('staff'), hcNWEAController.science);
router.get('/nwea/growth/reading', auth.hasRole('staff'), hcNWEAGrowthController.reading);
router.get('/nwea/growth/math', auth.hasRole('staff'), hcNWEAGrowthController.math);
router.get('/nwea/growth/science', auth.hasRole('staff'), hcNWEAGrowthController.science);

module.exports = router;