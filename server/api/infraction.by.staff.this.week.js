'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InfractionByStaffThisWeek = mongoose.model('InfractionByStaffThisWeek', new Schema({}, {
    collection: 'infractions.by.staff.this.week'
}));

exports.index = function(req, res) {
    InfractionByStaffThisWeek.find(function(err, infractions) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(infractions);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}