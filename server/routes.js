/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

    // Insert routes below
    app.use('/api/stmath', require('./api/stmath'));
    app.use('/api/ar', require('./api/ar'));
    app.use('/api/officehours', require('./api/officehours'));
    app.use('/api/behavior', require('./api/behavior'));
    app.use('/api/attendance', require('./api/attendance'));
    app.use('/api/students', require('./api/student'));
    app.use('/api/hc', require('./api'));
    app.use('/api/grades', require('./api/grades'));
    app.use('/api/users', require('./api/user'));

    app.use('/auth', require('./auth'));

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function(req, res) {
            res.sendfile(app.get('appPath') + '/index.html');
        });
};