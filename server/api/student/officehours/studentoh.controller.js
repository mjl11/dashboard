'use strict';

var _ = require('lodash');
var StudentOfficeHours = require('./studentoh.model');

/**
 * Get a single user
 */
exports.show = function(req, res, next) {
    var email = req.params.email;

    StudentOfficeHours.find({
        email: email
    }, function(err, user) {
        if (err) return next(err);
        if (!user) return res.send(401);
        res.json(user);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}