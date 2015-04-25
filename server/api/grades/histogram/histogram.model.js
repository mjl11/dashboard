'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HistogramSchema = new Schema({
    grade_level: Number,
    name: String,
    categories: [],
    data: []
}, {
    collection: 'grades.histogram'
});

module.exports = mongoose.model('Histogram', HistogramSchema);