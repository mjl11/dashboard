'use strict';

var _ = require('lodash');
var hcGPA = require('./hc.gpa.model');

// Get overall GPA scores
exports.index = function(req, res) {
    hcGPA.find(function(err, gpa) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(gpa);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}