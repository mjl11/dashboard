'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BelowcSchema = new Schema({
    school: [{
        data: [{
            data: [{
                "first_name": String,
                "illuminate_student_id": Number,
                "last_name": String,
                "mark": String,
                "missing_count": Number,
                "percentage": Number,
                "student_id": String
            }],
            name: String
        }],
        name: Number
    }]
}, {
    collection: 'grades.belowc'
});

module.exports = mongoose.model('BelowC', BelowcSchema);