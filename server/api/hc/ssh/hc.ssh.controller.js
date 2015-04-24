'use strict';

var _ = require('lodash');
var hcSSH = require('./hc.ssh.model');

exports.index = function(req, res) {
    hcSSH.find(function(err, data) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, data);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}