const tripsList = (req, res) => {
    res.render('trips', {
        trips: [
            {
                title: "Hawaiian Adventure",
                description: "7 days in Maui with oceanfront lodging.",
                price: 1899
            },
            {
                title: "Alaskan Cruise",
                description: "Explore glaciers and wildlife on a 10‑day cruise.",
                price: 2499
            },
            {
                title: "European Explorer",
                description: "Visit Paris, Rome, and Barcelona in a 12‑day tour.",
                price: 3299
            }
        ]
    });
};

module.exports = {
    tripsList
};
