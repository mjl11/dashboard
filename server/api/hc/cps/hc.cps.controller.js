'use strict';

var _ = require('lodash');
var hcCPS = require('./hc.cps.model');

exports.index = function(req, res) {
    hcCPS.find(function(err, cps) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(cps);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}