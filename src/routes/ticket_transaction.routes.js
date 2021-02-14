const express = require('express');

const router = express.Router();

const transactionController = require('../controller/transaction_event.controller');

// Endpoint to create a new specific event
router.post('/purchase', transactionController.purchaseTicket);

// endpoint to get purchase information for a certain transaction id
router.get('/get_info', transactionController.getInfo)

module.exports = router;