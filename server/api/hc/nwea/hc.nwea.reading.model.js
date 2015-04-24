'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcNWEAReadingSchema = new Schema({
    "categories": [],
    "data": []
}, {
    collection: 'hc.nwea.reading.progress'
});


module.exports = mongoose.model('hcNWEAReading', hcNWEAReadingSchema);