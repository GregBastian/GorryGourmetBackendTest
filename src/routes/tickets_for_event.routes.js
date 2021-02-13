const express = require('express');

const router = express.Router();

const eventController = require('../controller/ticket_event.controller');

// Endpoint to create new ticket type on one specific event
router.post('/create', eventController.createEvent)

router.post('/ticket/create', eventController.createTicketForEvent)

// Endpoint to retrieve event information, including location data and ticket data
router.get('/get_info', eventController.getEventInfo)

module.exports = router;