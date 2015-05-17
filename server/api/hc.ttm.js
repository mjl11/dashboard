'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hcTTM = mongoose.model('hcTTM', new Schema({}, {
    collection: 'hc.plt.ttm'
}));

exports.index = function (req, res) {
    hcTTM.find(function (err, ttm) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(ttm);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}