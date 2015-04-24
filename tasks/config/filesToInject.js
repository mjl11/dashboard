/**
 * Files injected into index.html by gulp-inject
 * used by tasks inject & watch
 */

module.exports = [
  'client/app/app.js',
  'client/app/**/*.js', '!client/app/**/*.spec.js',
  'client/components/**/*.js', '!client/components/**/*.spec.js',
  'client/directives/**/*.js', '!client/directives/**/*.spec.js',
  'client/app/**/*.css',
  'client/components/**/*.css' 
];
