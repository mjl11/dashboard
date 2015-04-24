'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NameGameSchema = new Schema({
    "student_id": String,
    "gender": String,
    "grade_level": String
}, {
    collection: 'students.pics.id'
});

module.exports = mongoose.model('NameGame', NameGameSchema);