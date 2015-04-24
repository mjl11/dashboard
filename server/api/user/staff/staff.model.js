'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StaffSchema = new Schema({
    email: String
}, {
    collection: 'users.staff'
});

module.exports = mongoose.model('Staff', StaffSchema);