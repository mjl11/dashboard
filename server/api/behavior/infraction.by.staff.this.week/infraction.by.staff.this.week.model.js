'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InfractionsSchema = new Schema({
    "last_name": String,
    "demerits": Number,
    "merits": Number
}, {
    collection: 'infractions.by.staff.this.week'
});

module.exports = mongoose.model('InfractionByStaffThisWeek', InfractionsSchema);