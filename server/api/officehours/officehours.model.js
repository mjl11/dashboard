'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OfficehoursSchema = new Schema({
    name: String,
    data: []
}, {
    collection: 'officehours'
});

module.exports = mongoose.model('Officehours', OfficehoursSchema);