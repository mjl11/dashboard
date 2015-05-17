'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Behavior = mongoose.model('Behavior', new Schema({}, {
    collection: 'hc.behavior'
}));

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