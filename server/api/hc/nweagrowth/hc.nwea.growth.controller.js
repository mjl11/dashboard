'use strict';

var _ = require('lodash');
var hcNWEAReadingGrowth = require('./hc.nwea.reading.growth.model');
var hcNWEAMathGrowth = require('./hc.nwea.math.growth.model');
var hcNWEAScienceGrowth = require('./hc.nwea.science.growth.model');


exports.reading = function(req, res) {
    hcNWEAReadingGrowth.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, data);
    });
};

exports.math = function(req, res) {
    hcNWEAMathGrowth.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, data);
    });
};

exports.science = function(req, res) {
    hcNWEAScienceGrowth.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, data);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}