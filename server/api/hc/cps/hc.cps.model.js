'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcCPSSchema = new Schema({
    "data": String,
    "name": String
}, {
    collection: 'hc.cps.ontrack'
});

module.exports = mongoose.model('hcCPS', hcCPSSchema);