'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcNWEAMathGrowthSchema = new Schema({
    "y": Number,
    "name": String
}, {
    collection: 'hc.nwea.math.growth'
});

module.exports = mongoose.model('hcNWEAMathGrowth', hcNWEAMathGrowthSchema);