'use strict';

var _ = require('lodash');
var hcReadingPlus = require('./hc.readingplus.model');

exports.index = function(req, res) {
    hcReadingPlus.find(function(err, rp) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(rp);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}