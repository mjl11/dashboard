'use strict';

var _ = require('lodash');
var InfractionByStaffThisWeek = require('./infraction.by.staff.this.week.model');

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