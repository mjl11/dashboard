'use strict';

var express = require('express');
var config = require('../config/environment');
var User = require('../api/user/user.model');
var Staff = require('../api/user/staff/staff.model');

// Passport Configuration
require('./google/passport').setup(User, Staff, config);

var router = express.Router();

router.use('/google', require('./google'));

module.exports = router;