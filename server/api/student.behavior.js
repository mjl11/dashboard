'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StuBehavior = mongoose.model('StuBehavior', new Schema({}, {
    collection: 'students.behavior'
}));

/**
 * Get a single user
 */
exports.show = function(req, res, next) {
    var email = req.params.email;

    StuBehavior.find({
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