'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GPA = mongoose.model('GPA', new Schema({}, {
    collection: 'grades.currentgpa'
}));

// Get list of current GPA by Advisor
exports.index = function(req, res) {
    GPA.find(function(err, gpa) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(gpa);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}