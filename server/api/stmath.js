'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Stmath = mongoose.model('Stmath', new Schema({}, {
    collection: 'plt.stmath'
}));

// Get list of stmaths
exports.index = function(req, res) {
    Stmath.find(function(err, stmaths) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(stmaths);
    });
};