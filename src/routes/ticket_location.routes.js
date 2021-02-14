const express = require('express');

const router = express.Router();

const locationController = require('../controller/ticket_location.controller');

// Endpoint to create new location for one specific event
router.post('/create', locationController.createLocation)

module.exports = router;