'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcRetentionSchema = new Schema({
    "overall": {
        "name": String,
        "data": []
    }
}, {
    collection: 'hc.retention'
});

module.exports = mongoose.model('hcRetention', hcRetentionSchema);