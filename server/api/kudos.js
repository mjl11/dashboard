'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var KudosSchema = mongoose.model('kudos', new Schema({
    kudosTo: String,
    kudosFrom: String,
    kudosContent: String,
    likes: []
}, {
        collection: 'kudos'
    }));

exports.index = function (req, res) {
    KudosSchema.find(function (err, kudos) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(kudos);
    }).sort({$natural: -1});
};

exports.create = function (req, res) {
    KudosSchema.create(req.body, function (err, kudosResp) {
        if (err) { return handleError(res, err); }
        console.log(req.body);
        return res.json(201, kudosResp);
    });
};
/**
exports.put = function (req, res) {
  KudosSchema.update({_id: req.params.id}, {likes: req.body.likes});  
}; */

function handleError(res, err) {
    return res.send(500, err);
}