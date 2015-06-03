'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kudos = mongoose.model('kudos', new Schema({}, {
        kudosTo: String,
        kudosFrom: String,
        kudosContent: String
    }, {
        collection: 'kudos'
    }));

exports.index = function (req, res) {
    kudos.find(function (err, kudos) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(kudos);
    });
};

exports.create = function(req, res) {
    kudos.create(req.body, function(err, kudosResp) {
        if(err) { return handleError(res, err); }
        console.log(req.body);
        return res.json(201, kudosResp);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}