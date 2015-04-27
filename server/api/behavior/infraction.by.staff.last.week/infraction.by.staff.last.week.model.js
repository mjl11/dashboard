'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InfractionsSchema = new Schema({
    "last_name": String,
    "demerits": Number,
    "merits": Number
}, {
    collection: 'infractions.by.staff.last.week'
});

module.exports = mongoose.model('InfractionByStaffLastWeek', InfractionsSchema);