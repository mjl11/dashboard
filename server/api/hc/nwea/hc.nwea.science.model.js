'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcNWEAScienceSchema = new Schema({
    "categories": [],
    "data": []
}, {
    collection: 'hc.nwea.science.progress'
});

module.exports = mongoose.model('hcNWEAScience', hcNWEAScienceSchema);