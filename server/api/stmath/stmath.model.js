'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StmathSchema = new Schema({

}, {
    collection: 'plt.stmath'
});

module.exports = mongoose.model('Stmath', StmathSchema);