"use strict";

const TransactionEventModel = require('../models/ticket_transaction.model');

const TicketForEventModel = require('../models/ticket_for_event.model');

const { v4: uuidv4 } = require('uuid');
const TicketEventModel = require('../models/ticket_event.model');

var transactionCancel = false;

exports.purchaseTicket = (req, res) => {
	console.log("Purchasing tickets for user with phone number ", req.body.phone_number);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.send(400).send({success: false, message: 'Please provide a valid JSON'});
	}else{

		let transactionId = uuidv4();
		req.body.purchases.forEach(purchase =>{
			TicketForEventModel.decrementTicketAmount(purchase.ticket_id, purchase.ticket_amount, (err, result) =>{
				if(err) res.send(err);
			})

			const newTransactionData = new TransactionEventModel(transactionId, req.body, purchase);
			TransactionEventModel.createTransaction(newTransactionData, (err, eventInfo)=>{
				if(err) res.send(err);
			})
		})
		req.body.transactionId = transactionId;
		res.json({status: true, message: `Ticket(s) purchased successfully for phone number ${req.body.phone_number}`, data: req.body})
	}
}

exports.createTicketForEvent = (req, res) =>{

}

exports.getInfo = (req, res) => {
	console.log("Getting transactions with id : ", req.body.transaction_id);
	TransactionEventModel.getTransactionsbyTransactionId(req.body.transaction_id, (err, eventInfo)=>{
		if (err) res.send(err);
		res.json({status: true, message: "data fetch successful", data: eventInfo})
	})
}



