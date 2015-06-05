'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');
    
var Schema = mongoose.Schema;

var TheZeroes = mongoose.model('TheZeroes', new Schema({}, {
    collection: 'the_zeroes'
}));

exports.index = function(req, res) {
    TheZeroes.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}