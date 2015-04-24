'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentOfficeHoursSchema = new Schema({
    email: String,
    assigned: [],
    attended: []
}, {
    collection: 'students.officehours'
});

module.exports = mongoose.model('StudentOfficeHours', StudentOfficeHoursSchema);