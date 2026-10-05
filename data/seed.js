const fs = require('fs');
const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/travlr';
mongoose.connect(dbURI);

require('../app_server/models/trips');
const Trip = mongoose.model('Trip');

const tripsData = JSON.parse(fs.readFileSync(__dirname + '/trips.json', 'utf8'));


const seedTrips = async () => {
    try {
        await Trip.deleteMany({});
        await Trip.insertMany(tripsData);
        console.log('Trips collection seeded successfully');
    } catch (err) {
        console.error('Error seeding trips:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedTrips();
