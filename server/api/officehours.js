'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Officehours = mongoose.model('Officehours', new Schema({}, {
    collection: 'officehours'
}));

// Get list of officehourss
exports.index = function(req, res) {
    Officehours.find(function(err, officehourss) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(officehourss);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}