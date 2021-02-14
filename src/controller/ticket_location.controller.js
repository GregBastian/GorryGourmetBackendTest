const TicketLocationModel = require('../models/ticket_location.model');

exports.createLocation = (req, res) => {
	const newLocationData = new TicketLocationModel(req.body);
	console.log("Creating new location with details: ", newLocationData);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.send(400).send({success: false, message: 'Please fill all fields'});
	}else{
		TicketLocationModel.createLocation(newLocationData, (err, newLocationInfo)=>{
			if(err) res.send(err);
			res.json({status: true, message: 'Event Created Successfully', data: newLocationInfo})
		})
	}
}