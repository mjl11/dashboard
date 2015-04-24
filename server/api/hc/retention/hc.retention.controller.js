'use strict';

var _ = require('lodash');
var hcRetention = require('./hc.retention.model');

exports.index = function(req, res) {
    hcRetention.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}