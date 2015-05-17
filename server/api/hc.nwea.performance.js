'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hcNWEAReading = mongoose.model('hcNWEAReading', new Schema({}, {
    collection: 'hc.nwea.reading.progress'
}));

var hcNWEAMath = mongoose.model('hcNWEAMath', new Schema({}, {
    collection: 'hc.nwea.math.progress'
}));

var hcNWEAScience = mongoose.model('hcNWEAScience', new Schema({}, {
    collection: 'hc.nwea.science.progress'
}));


exports.reading = function (req, res) {
    hcNWEAReading.find(function (err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

exports.math = function (req, res) {
    hcNWEAMath.find(function (err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

exports.science = function (req, res) {
    hcNWEAScience.find(function (err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}