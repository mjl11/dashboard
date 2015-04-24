'use strict';

/**
 * Watch files, and do things when they changes.
 * Recompile scss if needed.
 * Reinject files
 */

var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var watch      = require('gulp-watch');
var inject     = require('gulp-inject');
var plumber    = require('gulp-plumber');
var sass       = require('gulp-sass');
var bowerFiles = require('main-bower-files');

var toInject   = require('./config/filesToInject');
var toExclude  = require('./config/bowerFilesToExclude');

module.exports = function () {

  livereload.listen();

  gulp.watch('bower.json', function () {
    gulp.src('client/index.html')
      .pipe(inject(gulp.src(bowerFiles(), { read: false }), {
        name: 'bower',
        relative: 'true',
        ignorePath: toExclude
      }))
      .pipe(gulp.dest('client'));
  });

  watch([
    'client/styles/**/*.scss',
    'client/app/**/*.scss',
    'client/components/**/*.scss'
  ], function () {
    gulp.src('client/styles/app.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest('client/styles/css'))
      .pipe(livereload());
  });

  var coreFiles = [
    'client/index.html',
    'client/app',
    'client/app/**/*.html',
    'client/app/**/*.js',
    '!client/app/**/*.scss',
    '!client/app/**/*.spec.js',
    '!client/app/**/*.e2e.js',
    'client/components',
    'client/components/**/*.html',
    'client/components/**/*.js',
    '!client/components/**/*.spec.js'
  ];

  var lastInjection = Date.now();

  watch(coreFiles, { events: ['add', 'unlink'] }, function () {
    if (Date.now() - lastInjection < 100) { return; }
    lastInjection = Date.now();
    gulp.src('client/index.html')
      .pipe(inject(gulp.src(toInject), { relative: true }))
      .pipe(gulp.dest('client'));
  });

  watch(coreFiles, livereload.changed);
  watch(['client/index.html', 'client/app.js'], livereload.changed);

};
