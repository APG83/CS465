const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// Single trip route
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

// All trips route
router
    .route('/trips')
    .get(tripsController.tripsList);

module.exports = router;