'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hcReadingPlus = mongoose.model('hcReadingPlus', new Schema({}, {
    collection: 'hc.plt.readingplus'
}));

exports.index = function(req, res) {
    hcReadingPlus.find(function(err, rp) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(rp);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}