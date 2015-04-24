'use strict';

var _ = require('lodash');
var Ar = require('./ar.model');

// Get list of ars
exports.index = function(req, res) {
  Ar.find(function (err, ars) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(ars);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}