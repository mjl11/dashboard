'use strict';

var _        = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kudos = mongoose.model('kudos', new Schema({}, {
    collection: 'kudos'
}));

exports.index = function(req, res) {
    kudos.find(function(err, kudos) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(kudos);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}