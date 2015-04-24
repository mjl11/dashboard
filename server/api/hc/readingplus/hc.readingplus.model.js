'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcReadingPlusSchema = new Schema({
    "name": String,
    "data": [],
    "coaches": []
}, {
    collection: 'hc.plt.readingplus'
});

module.exports = mongoose.model('hcReadingPlus', hcReadingPlusSchema);