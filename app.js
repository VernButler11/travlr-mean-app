const express = require('express');
const path = require('path');
const hbs = require('hbs');

const tripsRouter = require('./app_server/routes/trips');
const roomsRouter = require('./app_server/routes/rooms');
const mealsRouter = require('./app_server/routes/meals');
const aboutRouter = require('./app_server/routes/about');
const contactRouter = require('./app_server/routes/contact');



const app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/trips', tripsRouter);
app.use('/rooms', roomsRouter);
app.use('/meals', mealsRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

module.exports = app;
