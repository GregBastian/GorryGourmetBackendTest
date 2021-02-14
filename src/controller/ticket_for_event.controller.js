const TicketForEventModel = require('../models/ticket_for_event.model');

exports.CreateTicket = (req, res) =>{
const newEventData = new TicketForEventModel(req.body)
	console.log("Creating new event", newTicketData);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.send(400).send({success: false, message: 'Please fill all fields'});
	}else{
		TicketForEventModel.createTicket(newTicketData, (err, eventInfo)=>{
			if(err) res.send(err);
			res.json({status: true, message: `Ticker for event id ${newTicketData.event_id} created Successfully`, data: req.body})
		})
	}
}