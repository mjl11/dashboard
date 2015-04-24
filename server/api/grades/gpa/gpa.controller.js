'use strict';

var _ = require('lodash');
var GPA = require('./gpa.model');

// Get list of current GPA by Advisor
exports.index = function(req, res) {
    GPA.find(function(err, gpa) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, gpa);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}