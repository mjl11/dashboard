'use strict';

var _ = require('lodash');
var hcADA = require('./hc.ada.model');

exports.index = function(req, res) {
    hcADA.find(function(err, ada) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(ada);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}