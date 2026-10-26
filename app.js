require('./app_api/models/db');
const express = require('express');
const path = require('path');
const cors = require('cors');

// API routes
const apiRouter = require('./app_api/routes/index');

const app = express();

// Allow the Angular admin app to call the API
app.use(cors({ origin: 'http://localhost:4200' }));

// JSON body parser
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Mount API routes
app.use('/api', apiRouter);

// Start backend on IPv4
app.listen(3000, '127.0.0.1', () => {
    console.log('API server running on http://127.0.0.1:3000');
});

module.exports = app;