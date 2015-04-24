'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcADASchema = new Schema({
    grade: String,
    ada: String
}, {
    collection: 'hc.ada'
});

module.exports = mongoose.model('hcADA', hcADASchema);