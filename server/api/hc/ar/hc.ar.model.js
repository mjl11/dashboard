'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hcArSchema = new Schema({
    "data": [],
    "name": String
}, {
    collection: 'hc.plt.ar'
});

module.exports = mongoose.model('hcAr', hcArSchema);