const TransactionEventModel = require('../models/ticket_transaction.model');

const TicketForEventModel = require('../models/ticket_for_event.model');

const { v4: uuidv4 } = require('uuid');

exports.purchaseTicket = (req, res) => {
	console.log("Purchasing tickets for user with phone number ", req.phone_number);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.send(400).send({success: false, message: 'Please provide a valid JSON'});
	}else{
		req.body.purchases.forEach(purchase =>{
			TicketForEventModel.getTicketAmountById(purchase.ticket_id, (err, result) =>{
				console.log(`${result[0].ticket_quota}<<>>${purchase.ticket_amount}`);
				if(purchase.ticket_amount > result[0].ticket_quota){
				   let queryResult = result[0]
				   console.log(`Transaction for ${queryResult.ticket_type} with amount ${queryResult.ticket_amount} could not be processed`);
				   res.json({status: true, message: 'Available ticket quota is not enough for this ticket type', data: purchase})
				   break;
				}
			})
		})

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
		res.json({status: true, message: `Ticket(s) purchased successfully for phone number ${req.body.phone_number}`, data: req.body})
	}
}

exports.createTicketForEvent = (req, res) =>{cd

}

exports.getInfo = (req, res) => {
	console.log("Getting event data for event with id : ", req.body.id);
	TransactionEventModel.getEventById(req.body.id, (err, eventInfo)=>{
		if (err) res.send(err);
		res.json({status: true, message: "data fetch successful", data: req.body})
	})
}



