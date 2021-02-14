const dbConn = require('../config/db.config')

var TicketForEventModel = function(ticketForEvent, ticketInfo){
    this.event_id       =   ticketForEvent.event_id;
    this.event_name     =   ticketForEvent.event_name;
    this.ticket_type    =   ticketInfo.ticket_type;
    this.ticket_quota   =   ticketInfo.ticket_quota;
}

TicketForEventModel.createTicket = (newTicketForEventData, result) =>{
    dbConn.query('INSERT INTO ticket_for_event SET ? ', newTicketForEventData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log(`New Ticket ${newTicketForEventData.ticket_type} with quota of ${newTicketForEventData.ticket_quota} for event_id ${newTicketForEventData.event_id} created successfully`);
            result(null, res);
        }
    })
}

module.exports = TicketForEventModel;