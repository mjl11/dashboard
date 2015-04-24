'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GPASchema = new Schema({
    school: [{
        data: [{
            data: [{
                "ada": String,
                "first_name": String,
                "gpa": String,
                "illuminate_student_id": Number,
                "last_name": String,
                "student_id": String
            }],
            gpa: Number,
            name: String
        }],
        gpa: Number,
        name: Number
    }]
}, {
    collection: 'grades.currentgpa'
});

module.exports = mongoose.model('GPA', GPASchema);