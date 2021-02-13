const dbConn = require('../config/db.config')

var TicketEvent = function(ticketEvent){
    this.event_name     =   ticketEvent.event_name;
    this.location       =   ticketEvent.location;
    this.date_begin     =   new Date(ticketEvent.date_begin);
    this.date_end       =   new Date(ticketEvent.date_end);
}

TicketEvent.createTicket = (newTicketForEventData, result) =>{
    dbConn.query('INSERT INTO ticket_event SET ? ', newTicketForEventData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('New event created successfully');
            result(null, res);
        }
    })
}

TicketEvent.getEventByID = (id, result)=>{
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

TicketEvent.createEvent = (eventNewData, result) =>{
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