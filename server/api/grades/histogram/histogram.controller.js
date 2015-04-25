'use strict';

var _ = require('lodash');
var histogram = require('./histogram.model');

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