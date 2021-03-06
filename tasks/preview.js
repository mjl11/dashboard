'use strict';

/**
 * Preview the build app
 */

var gulp = require('gulp');
var open = require('gulp-open');

var config = require('../server/config/environment');

var openOpts = {
  url: 'http://localhost:' + config.port,
  already: false
};

module.exports = function () {
  process.env.NODE_ENV = 'development';
  require('../dist/server/server');
  return gulp.src('../dist/client/index.html')
    .pipe(open('', openOpts));
};
