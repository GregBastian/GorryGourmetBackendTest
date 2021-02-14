const TicketForEventModel = require('../models/ticket_for_event.model');

exports.createTicket = (req, res) =>{
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.send(400).send({success: false, message: 'Please fill all fields'});
	}else{
		console.log(`Creating tickets for event id ${req.body.event_id}`);
		req.body.tickets.forEach(ticket =>{
			const newTicketData = new TicketForEventModel(req.body, ticket);
			TicketForEventModel.createTicket(newTicketData, (err, eventInfo)=>{
				if(err) res.send(err);
			})
		})
		res.json({status: true, message: `Ticker for event id ${req.body.event_id} created Successfully`, data: req.body})
	}
}

exports.decrementTicketAmount = (req, res) => {}