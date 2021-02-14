const TransactionEventModel = require('../models/transaction_event.model');

exports.purchaseTicket = (req, res) => {
	const newPurchaseData = new TransactionEventModel(req.body);
	console.log("Creating new transaction", newPurchaseData);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.send(400).send({success: false, message: 'Please fill all fields'});
	}else{
		TransactionEventModel.createTicketTransaction(newPurchaseData, (err, eventInfo)=>{
			if(err) res.send(err);
			res.json({status: true, message: 'Ticket purchased Successfully', data: req.body})
		})
	}
}

exports.createTicketForEvent = (req, res) =>{

}

exports.getInfo = (req, res) => {
	console.log("Getting event data for event with id : ", req.body.id);
	TransactionEventModel.getEventById(req.body.id, (err, eventInfo)=>{
		if (err) res.send(err);
		res.json({status: true, message: "data fetch successful", data: req.body})
	})
}



