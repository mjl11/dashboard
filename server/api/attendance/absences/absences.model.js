'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AbsencesSchema = new Schema({
    "student_id": String,
    "last_name": String,
    "first_name": String,
    "advisor": String,
    "grade_level": Number,
    "num_absent": Number
}, {
    collection: 'attendance.recent.absences'
});

module.exports = mongoose.model('Absences', AbsencesSchema);