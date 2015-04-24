'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcSSHSchema = new Schema({
    "data": {
        "name": String,
        "y": Number
    }
}, {
    collection: 'hc.ssh'
});

module.exports = mongoose.model('hcSSH', hcSSHSchema);