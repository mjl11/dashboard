'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hcNWEAReadingGrowth = mongoose.model('hcNWEAReadingGrowth', new Schema({}, {
    collection: 'hc.nwea.reading.growth'
}));

var hcNWEAMathGrowth = mongoose.model('hcNWEAMathGrowth', new Schema({}, {
    collection: 'hc.nwea.math.growth'
}));

var hcNWEAScienceGrowth = mongoose.model('hcNWEAScienceGrowth', new Schema({}, {
    collection: 'hc.nwea.science.growth'
}));


exports.reading = function (req, res) {
    hcNWEAReadingGrowth.find(function (err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

exports.math = function (req, res) {
    hcNWEAMathGrowth.find(function (err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

exports.science = function (req, res) {
    hcNWEAScienceGrowth.find(function (err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}