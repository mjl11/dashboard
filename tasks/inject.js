'use strict';

/**
 * Inject css/js files in index.html
 */
var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');

var toInject = require('./config/filesToInject');

module.exports = function () {
  var sources = gulp.src(toInject, { read: false });
  var bowerSources = gulp.src(bowerFiles({
    paths: {
      bowerDirectory: 'client/bower_components',
      bowerrc: '.bowerrc',
      bowerJson: 'bower.json',
      base: 'client/bower_components'
    }
  }));
  
  return gulp.src('client/index.html')
    .pipe(inject(bowerSources, {
      name: 'bower',
      relative: true
    }))
    .pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest('client'));
};
