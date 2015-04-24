'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcNWEAScienceGrowthSchema = new Schema({
    "y": Number,
    "name": String
}, {
    collection: 'hc.nwea.science.growth'
});

module.exports = mongoose.model('hcNWEAScienceGrowth', hcNWEAScienceGrowthSchema);