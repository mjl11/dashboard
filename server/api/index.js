'use strict';

var express = require('express');
var auth = require('../auth/auth.service');
var router = express.Router();

router.get('/gpa', auth.hasRole('staff'), require('./hc/gpa/hc.gpa.controller').index);
router.get('/ada', auth.hasRole('staff'), require('./hc/ada/hc.ada.controller').index);
router.get('/ar', auth.hasRole('staff'), require('./hc/ar/hc.ar.controller').index);
router.get('/cps/ontrack', auth.hasRole('staff'), require('./hc/cps/hc.cps.controller').index);
router.get('/ttm', auth.hasRole('staff'), require('./hc/ttm/hc.ttm.controller').index);
router.get('/readingplus', auth.hasRole('staff'), require('./hc/readingplus/hc.readingplus.controller').index);
router.get('/retention', auth.hasRole('staff'), require('./hc/retention/hc.retention.controller').index);
router.get('/ssh', auth.hasRole('staff'), require('./hc/ssh/hc.ssh.controller').index);
router.get('/nwea/progress/reading', auth.hasRole('staff'), require('./hc/nwea/hc.nwea.controller').reading);
router.get('/nwea/progress/math', auth.hasRole('staff'), require('./hc/nwea/hc.nwea.controller').math);
router.get('/nwea/progress/science', auth.hasRole('staff'), require('./hc/nwea/hc.nwea.controller').science);
router.get('/nwea/growth/reading', auth.hasRole('staff'), require('./hc/nweagrowth/hc.nwea.growth.controller').reading);
router.get('/nwea/growth/math', auth.hasRole('staff'), require('./hc/nweagrowth/hc.nwea.growth.controller').math);
router.get('/nwea/growth/science', auth.hasRole('staff'), require('./hc/nweagrowth/hc.nwea.growth.controller').science);

module.exports = router;