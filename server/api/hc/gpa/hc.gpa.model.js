'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcGPASchema = new Schema({
    school: [{
        "data": Number,
        "name": Number
    }]
}, {
    collection: 'hc.gpa'
});

module.exports = mongoose.model('hcGPA', hcGPASchema);