const express = require('express');

const router = express.Router();

const eventController = require('../controller/ticket_event.controller');

const ticketForEventController = require('../controller/ticket_for_event.controller');

// Endpoint to create a new specific event
router.post('/create', eventController.createEvent);

//
router.post('ticket/create', ticketForEventController.createTicket)

// Endpoint to retrieve event information, including location data and ticket data [ticket data = WIP]
router.get('/get_info', eventController.getEventInfo);

module.exports = router;