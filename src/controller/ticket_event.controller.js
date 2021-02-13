// Create Event	/event/create	POST	Endpoint to create new event

const TicketEventModel = require('../models/ticket_event.model');

exports.createEvent = (req, res) => {
	const newEventData = new TicketEventModel(req.body);
	console.log("Creating new event", newEventData);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.send(400).send({success: false, message: 'Please fill all fields'});
	}else{
		TicketEventModel.createEvent(newEventData, (err, eventInfo)=>{
			if(err) res.send(err);
			res.json({status: true, message: 'Event Created Successfully', data: req.body})
		})
	}
}

exports.createTicketForEvent = (req, res) =>{

}

exports.getEventInfo = (req, res) => {
	console.log("Getting event data for event with id : ", req.body);
	TicketEventModel.getEventById(req.body.id, (err, eventInfo)=>{
		if (err) res.send(err);
		res.json({status: true, message: "data fetch successful", data: eventInfo})
	})
}



