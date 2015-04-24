'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcNWEAReadingGrowthSchema = new Schema({
    "y": Number,
    "name": String
}, {
    collection: 'hc.nwea.reading.growth'
});

module.exports = mongoose.model('hcNWEAReadingGrowth', hcNWEAReadingGrowthSchema);