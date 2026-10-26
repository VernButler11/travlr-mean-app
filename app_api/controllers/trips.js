const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET /api/trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find().exec();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET /api/trips/:tripCode
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json(err);
    }
};

// POST /api/trips
const tripsCreate = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json(trip);
    } catch (err) {
        res.status(400).json(err);
    }
};

// PUT /api/trips/:tripCode
const tripsUpdateOne = async (req, res) => {
    try {
        const trip = await Trip.findOneAndUpdate(
            { code: req.params.tripCode },
            req.body,
            { new: true, runValidators: true }
        ).exec();
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.status(200).json(trip);
    } catch (err) {
        res.status(400).json(err);
    }
};

// DELETE /api/trips/:tripCode
const tripsDeleteOne = async (req, res) => {
    try {
        const trip = await Trip.findOneAndDelete({ code: req.params.tripCode }).exec();
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsCreate,
    tripsUpdateOne,
    tripsDeleteOne
};