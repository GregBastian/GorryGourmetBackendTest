const dbConn = require('../config/db.config')

var TicketEventModel = function(ticketEventModel){
    this.event_name     =   ticketEventModel.event_name;
    this.location       =   ticketEventModel.location;
    this.date_begin     =   new Date(ticketEventModel.date_begin);
    this.date_end       =   new Date(ticketEventModel.date_end);
}


TicketEventModel.getEventById = (id, result) =>{
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

TicketEventModel.getAllEvents = (result) =>{
    dbConn.query('SELECT * FROM ticket_event', (err, res)=>{
        if(err){
            console.log('An Exception happened while fetching all events', err);
            result(null,err);
        }else{
            console.log('Succesffuly fetched all events');
            result(null,res);
        }
    })
}



TicketEventModel.createEvent = (eventNewData, result) =>{
    dbConn.query('INSERT INTO ticket_event SET ? ', eventNewData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('New event created successfully');
            result(null, res)
        }
    })
}

TicketEventModel.addTicketForEvent = (eventData, result)=>{

}

module.exports = TicketEventModel;