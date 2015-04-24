'use strict';

var _ = require('lodash');
var hcTTM = require('./hc.ttm.model');

exports.index = function(req, res) {
    hcTTM.find(function(err, ttm) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(ttm);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}