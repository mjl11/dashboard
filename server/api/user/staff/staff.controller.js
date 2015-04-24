'use strict';

var Staff = require('./staff.model');

var validationError = function(res, err) {
    return res.json(422, err);
};

/**
 * Get a single user
 */
exports.show = function(req, res, next) {
    var userEmail = req.params.email;

    Staff.find({
        email: userId
    }, function(err, userEmail) {
        if (err) return next(err);
        if (!userEmail) return res.send(401);
        res.json(userEmail);
    });
};