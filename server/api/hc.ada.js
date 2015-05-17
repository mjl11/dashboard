'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hcADA = mongoose.model('hcADA', new Schema({}, {
    collection: 'hc.ada'
}));

exports.index = function (req, res) {
    hcADA.find(function (err, ada) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(ada);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}