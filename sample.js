const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;
