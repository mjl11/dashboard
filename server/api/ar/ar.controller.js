'use strict';

var _ = require('lodash');
var Ar = require('./ar.model');

// Get list of ars
exports.index = function(req, res) {
  Ar.find(function (err, ars) {
    if(err) { return handleError(res, err); }
    return res.json(200, ars);
  });
};

// Get a single ar
exports.show = function(req, res) {
  Ar.findById(req.params.id, function (err, ar) {
    if(err) { return handleError(res, err); }
    if(!ar) { return res.send(404); }
    return res.json(ar);
  });
};

// Creates a new ar in the DB.
exports.create = function(req, res) {
  Ar.create(req.body, function(err, ar) {
    if(err) { return handleError(res, err); }
    return res.json(201, ar);
  });
};

// Updates an existing ar in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ar.findById(req.params.id, function (err, ar) {
    if (err) { return handleError(res, err); }
    if(!ar) { return res.send(404); }
    var updated = _.merge(ar, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, ar);
    });
  });
};

// Deletes a ar from the DB.
exports.destroy = function(req, res) {
  Ar.findById(req.params.id, function (err, ar) {
    if(err) { return handleError(res, err); }
    if(!ar) { return res.send(404); }
    ar.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}