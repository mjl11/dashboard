'use strict';

var _ = require('lodash');
var Behavior = require('./behavior.model');

// Get list of behaviors
exports.index = function(req, res) {
    Behavior.find(function(err, behaviors) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(behaviors);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}