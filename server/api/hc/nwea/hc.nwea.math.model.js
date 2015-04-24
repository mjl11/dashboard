'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcNWEAMathSchema = new Schema({
    "categories": [],
    "data": []
}, {
    collection: 'hc.nwea.math.progress'
});

module.exports = mongoose.model('hcNWEAMath', hcNWEAMathSchema);