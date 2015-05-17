'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hcCPS = mongoose.model('hcCPS', new Schema({}, {
    collection: 'hc.cps.ontrack'
}));

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