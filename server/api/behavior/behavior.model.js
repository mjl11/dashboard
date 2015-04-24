'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BehaviorSchema = new Schema({
    "name": Number,
    "categories": [],
    "data": []
}, {
    collection: 'hc.behavior'
});

module.exports = mongoose.model('DetentionByGrade', BehaviorSchema);