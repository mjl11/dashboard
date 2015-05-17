'use strict';

var express = require('express');
var auth = require('../auth/auth.service');
var router = express.Router();

router.get('/gpa', auth.hasRole('staff'), require('./hc.gpa').index);
router.get('/ada', auth.hasRole('staff'), require('./hc.ada.js').index);
router.get('/ar', auth.hasRole('staff'), require('./hc.ar').index);
router.get('/cps/ontrack', auth.hasRole('staff'), require('./hc.cps').index);
router.get('/ttm', auth.hasRole('staff'), require('./hc/ttm/hc.ttm.controller').index);
router.get('/readingplus', auth.hasRole('staff'), require('./hc.readingplus').index);
router.get('/retention', auth.hasRole('staff'), require('./hc/retention/hc.retention.controller').index);
router.get('/ssh', auth.hasRole('staff'), require('./hc/ssh/hc.ssh.controller').index);


router.get('/nwea/progress/reading', auth.hasRole('staff'), require('./hc.nwea.performance').reading);
router.get('/nwea/progress/math', auth.hasRole('staff'), require('./hc.nwea.performance').math);
router.get('/nwea/progress/science', auth.hasRole('staff'), require('./hc.nwea.performance').science);
router.get('/nwea/growth/reading', auth.hasRole('staff'), require('./hc.nwea.growth').reading);
router.get('/nwea/growth/math', auth.hasRole('staff'), require('./hc.nwea.growth').math);
router.get('/nwea/growth/science', auth.hasRole('staff'), require('./hc.nwea.growth').science);

module.exports = router;