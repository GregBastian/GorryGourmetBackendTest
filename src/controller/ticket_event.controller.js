const TicketEventModel = require('../models/ticket_event.model');

exports.createEvent = (req, res) => {
	const newPurchaseData = new TicketEventModel(req.body);
	console.log("Creating new transaction", newPurchaseData);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.send(400).send({success: false, message: 'Please fill all fields'});
	}else{
		TicketEventModel.createEvent(newPurchaseData, (err, eventInfo)=>{
			if(err) res.send(err);
			res.json({status: true, message: 'Event created Successfully', data: req.body})
		})
	}
}

exports.getEventInfo = (req, res) => {
	console.log("Getting event data for event with id : ", req.body.id);
	TicketEventModel.getEventById(req.body.id, (err, eventInfo)=>{
		if (err) res.send(err);
		res.json({status: true, message: "data fetch successful", data: eventInfo})
	})
}



