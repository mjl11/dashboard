'use strict';

var _ = require('lodash');
var Stmath = require('./stmath.model');

// Get list of stmaths
exports.index = function(req, res) {
    Stmath.find(function(err, stmaths) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, stmaths);
    });
};