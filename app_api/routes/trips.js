const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Server-side route: render trips page
router.get('/', tripsController.tripsList);

module.exports = router;
