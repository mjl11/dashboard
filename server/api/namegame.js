'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NameGame = mongoose.model('NameGame', new Schema({}, {
    collection: 'students.pics.id'
}));

exports.index = function(req, res) {

    var gender = ['F', 'M']
    var random = Math.random() * 200;

    NameGame.find({
        gender: gender[Math.round(Math.random())]
    }, function(err, stu) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(stu.slice(random, random + 4));
    });
};

function handleError(res, err) {
    return res.send(500, err);
}