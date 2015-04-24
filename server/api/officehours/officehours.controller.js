'use strict';

var _ = require('lodash');
var Officehours = require('./officehours.model');

// Get list of officehourss
exports.index = function(req, res) {
    Officehours.find(function(err, officehourss) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, officehourss);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}