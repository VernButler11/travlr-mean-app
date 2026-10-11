require('./app_server/models/db');
const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Server-side routes
const indexRouter = require('./app_server/routes/index');
const tripsRouter = require('./app_server/routes/trips');
const roomsRouter = require('./app_server/routes/rooms');
const mealsRouter = require('./app_server/routes/meals');
const aboutRouter = require('./app_server/routes/about');
const contactRouter = require('./app_server/routes/contact');

// API routes (must export a router!)
const apiRouter = require('./app_api/routes/index');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Mount server-side routes
app.use('/', indexRouter);
app.use('/trips', tripsRouter);
app.use('/rooms', roomsRouter);
app.use('/meals', mealsRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

// Mount API routes
app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

module.exports = app;
