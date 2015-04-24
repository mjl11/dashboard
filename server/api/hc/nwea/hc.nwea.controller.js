'use strict';

var _ = require('lodash');
var hcNWEAReading = require('./hc.nwea.reading.model');
var hcNWEAMath = require('./hc.nwea.math.model');
var hcNWEAScience = require('./hc.nwea.science.model');


exports.reading = function(req, res) {
    hcNWEAReading.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

exports.math = function(req, res) {
    hcNWEAMath.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

exports.science = function(req, res) {
    hcNWEAScience.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}