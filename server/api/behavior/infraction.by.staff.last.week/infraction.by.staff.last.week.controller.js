'use strict';

var _ = require('lodash');
var InfractionByStaffLastWeek = require('./infraction.by.staff.last.week.model');

exports.index = function(req, res) {
    InfractionByStaffLastWeek.find(function(err, infractions) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(infractions);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}