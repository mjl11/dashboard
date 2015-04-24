'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BehaviorSchema = new Schema({
    email: String,
    data: [{
        "date": String,
        "infraction": String,
        "staff": String,
        "value": String
    }]
}, {
    collection: 'students.behavior'
});

module.exports = mongoose.model('Behavior', BehaviorSchema);