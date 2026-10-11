const mealsList = (req, res) => {
    res.render('meals', {
        meals: [
            { title: "Breakfast Buffet", description: "Fresh fruit, pastries, and hot dishes." },
            { title: "Seafood Dinner", description: "Shrimp, salmon, and lobster tail." }
        ]
    });
};

module.exports = {
    mealsList
};
