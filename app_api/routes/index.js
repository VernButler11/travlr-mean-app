const express = require('express');
const router = express.Router();
const apiController = require('../controllers/index');

// GET all trips
router.get('/trips', apiController.tripsList);

// GET one trip by tripCode
router.get('/trips/:tripCode', apiController.tripsFindByCode);

module.exports = router;
