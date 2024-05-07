const Sample = require('../models/Sample');

exports.getAllSamples = async (req, res) => {
    try {
        const samples = await Sample.find();
        res.json(samples);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createSample = async (req, res) => {
    try {
        const { name, age } = req.body;
        const sample = new Sample({ name, age });
        await sample.save();
        res.status(201).json(sample);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};
