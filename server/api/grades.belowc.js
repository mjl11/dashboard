'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BelowC = mongoose.model('BelowC', new Schema({}, {
    collection: 'grades.belowc'
}));

// Get list of grades below c
exports.index = function(req, res) {
    BelowC.find(function(err, gradess) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(gradess);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}