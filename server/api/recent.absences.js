'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');
    
var Schema = mongoose.Schema;

var Absences = mongoose.model('Absences', new Schema({}, {
    collection: 'attendance.recent.absences'
}));

exports.index = function(req, res) {
    Absences.find(function(err, absences) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(absences);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}