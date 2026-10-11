const roomsList = (req, res) => {
    res.render('rooms', {
        rooms: [
            { title: "Ocean View Suite", description: "King bed, balcony, oceanfront." },
            { title: "Garden Room", description: "Queen bed, patio, quiet location." }
        ]
    });
};

module.exports = { roomsList };

