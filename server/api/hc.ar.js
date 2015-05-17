'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');
    
var Schema = mongoose.Schema;
    
var hcAr = mongoose.model('hcAr', new Schema({}, {
    collection: 'hc.plt.ar'
}));

exports.index = function(req, res) {
    hcAr.find(function(err, ar) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(ar);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}