'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcTTMSchema = new Schema({
    "name": String,
    "section": String,
    "data": []
}, {
    collection: 'hc.plt.ttm'
});

module.exports = mongoose.model('hcTTM', hcTTMSchema);