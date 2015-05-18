'use strict';

/**
 * Compile sass
 */
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  notify = require('gulp-notify');

module.exports = function () {
  return gulp.src('./client/**/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./client'));
};