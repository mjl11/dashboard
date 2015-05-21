'use strict';

/**
 * Watch files, and do things when they changes.
 * Recompile scss if needed.
 * Reinject files
 */
var   gulp = require('gulp'),
    	livereload = require('gulp-livereload'),
      watch = require('gulp-watch'),
      inject = require('./inject.js'),
      sass = require('./sass.js');

var toInject = require('./config/filesToInject');

module.exports = function () {

  livereload.listen();

  watch([
    'client/app/**/*.scss'
  ], function () {
      sass();
    });

  var coreFiles = [
    'client/index.html',
    'client/**/*.css',
    'client/**/*.html',
    'client/**/*.js',
    '!client/**/*.scss',
  ];

  var lastInjection = Date.now();

  watch(coreFiles, { events: ['add', 'unlink'] }, function () {
    if (Date.now() - lastInjection < 100) { return; }
    
    lastInjection = Date.now();
    inject();
  });

  watch(coreFiles,  function () { 
    livereload.reload();
  });
};