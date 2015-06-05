'use strict';

var express = require('express');
var auth = require('../auth/auth.service');
var router = express.Router();

router.get('/hc/gpa', auth.hasRole('staff'), require('./hc.gpa').index);
router.get('/grades/belowc', auth.hasRole('staff'), require('./grades.belowc').index);
router.get('/grades/currentgpa', auth.hasRole('staff'), require('./grades.current.gpa').index);
router.get('/grades/histogram', auth.hasRole('staff'), require('./grades.histogram').index);

router.get('/hc/ada', auth.hasRole('staff'), require('./hc.ada.js').index);
router.get('/attendance/absences', auth.hasRole('staff'), require('./recent.absences').index);

router.get('/stmath', auth.hasRole('staff'), require('./stmath').index);
router.get('/officehours', auth.hasRole('staff'), require('./officehours').index);
router.get('/hc/cps/ontrack', auth.hasRole('staff'), require('./hc.cps').index);
router.get('/hc/ttm', auth.hasRole('staff'), require('./hc.ttm').index);
router.get('/hc/readingplus', auth.hasRole('staff'), require('./hc.readingplus').index);
router.get('/hc/retention', auth.hasRole('staff'), require('./hc.retention').index);
router.get('/hc/ssh', auth.hasRole('staff'), require('./hc.ssh').index);
router.get('/ar', auth.hasRole('staff'), require('./accelerated.reader').index);

router.get('/hc/nwea/progress/reading', auth.hasRole('staff'), require('./hc.nwea.performance').reading);
router.get('/hc/nwea/progress/math', auth.hasRole('staff'), require('./hc.nwea.performance').math);
router.get('/hc/nwea/progress/science', auth.hasRole('staff'), require('./hc.nwea.performance').science);
router.get('/hc/nwea/growth/reading', auth.hasRole('staff'), require('./hc.nwea.growth').reading);
router.get('/hc/nwea/growth/math', auth.hasRole('staff'), require('./hc.nwea.growth').math);
router.get('/hc/nwea/growth/science', auth.hasRole('staff'), require('./hc.nwea.growth').science);

router.get('/behavior', auth.hasRole('staff'), require('./behavior').index);
router.get('/behavior/infraction.by.staff.last.week', auth.hasRole('staff'), require('./infraction.by.staff.last.week').index);
router.get('/behavior/infraction.by.staff.this.week', auth.hasRole('staff'), require('./infraction.by.staff.this.week').index);

router.get('/student/behavior/:email', auth.hasRole('student'), require('./student.behavior').show);
router.get('/student/officehours/:email', auth.hasRole('student'), require('./student.office.hours').show);
router.get('/students/random', auth.hasRole('staff'), require('./namegame').index);

router.get('/kudos', auth.hasRole('staff'), require('./kudos').index);
router.get('/kudos/top', auth.hasRole('staff'), require('./kudos').top);
router.post('/kudos', auth.hasRole('staff'), require('./kudos').create);
router.put('/kudos/:id', auth.hasRole('staff'), require('./kudos').put);

router.get('/the_zeroes', auth.hasRole('staff'), require('./the_zeroes').index);

module.exports = router;