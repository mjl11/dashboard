'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var histogram = mongoose.model('histogram', new Schema({}, {
    collection: 'grades.histogram'
}));

// Get list of current GPA by Advisor
exports.index = function(req, res) {
    histogram.find(function(err, histogram) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(histogram);
    }).sort({"grade_level":1, "name":1});
};

function handleError(res, err) {
    return res.send(500, err);
}