'use strict';

var _ = require('lodash');
var NameGame = require('./namegame.model');

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