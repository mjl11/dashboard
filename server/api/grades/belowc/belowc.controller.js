'use strict';

var _ = require('lodash');
var BelowC = require('./belowc.model');

// Get list of grades below c
exports.index = function(req, res) {
    BelowC.find(function(err, gradess) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, gradess);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}