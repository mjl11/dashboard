'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');
    
var Schema = mongoose.Schema;
var hcGPA = mongoose.model('hcGPA', new Schema({}, {
    collection: 'hc.gpa'
}));

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