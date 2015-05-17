'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');
    
var Schema = mongoose.Schema;

var hcSSH = mongoose.model('hcSSH', new Schema({}, {
    collection: 'hc.ssh'
}));

exports.index = function(req, res) {
    hcSSH.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(data);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}