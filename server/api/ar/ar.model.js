'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArSchema = new Schema({
    sections: [],
    info: String,
    active: Boolean
}, {
    collection: 'plt.ar.detailed'
});

module.exports = mongoose.model('Ar', ArSchema);