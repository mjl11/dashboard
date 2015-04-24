'use strict';

var _ = require('lodash');
var hcAr = require('./hc.ar.model');

exports.index = function(req, res) {
    hcAr.find(function(err, ar) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(ar);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}