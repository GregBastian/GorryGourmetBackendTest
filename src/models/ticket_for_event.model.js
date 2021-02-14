const dbConn = require('../config/db.config')

var TicketForEventModel = function(ticketForEvent){
    this.event_id       =   ticketForEvent.event_id;
    this.event_name     =   ticketForEvent.event_name;
    this.ticket_type    =   ticketForEvent.ticket_type;
    this.ticket_quota   =   ticketForEvent.ticket_quota;
}

TicketForEventModel.createTicket = (newTicketForEventData, result) =>{
    dbConn.query('INSERT INTO ticket_for_event SET ? ', newTicketForEventData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log(`New Ticket ${newTickerForEventData.ticket_type} with quota of 
                ${newTicketForEventData.ticket_quota} for event_id ${newTicketForEventData.event_id} created successfully`);
            result(null, res);
        }
    })
}

TicketForEventModel.getEventByID = (id, result)=>{
    dbConn.query('SELECT * FROM ticket_event WHERE _id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching event by id', err);
            result(null, err);
        }else{
        	console.log(`Event with id ${id} successfully retrieved`);
            result(null, res);
        }
    })
}

TicketForEventModel.createEvent = (eventNewData, result) =>{
    dbConn.query('INSERT INTO ticket_event SET ? ', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('New event created successfully');
            result(null, res)
        }
    })
}

module.exports = TicketForEventModel;