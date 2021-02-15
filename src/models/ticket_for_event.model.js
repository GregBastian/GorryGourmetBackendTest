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
            console.log('Error while inserting data :', err);
            result(null, err);
        }else{
            console.log(`New Ticket ${newTicketForEventData.ticket_type} with quota of ${newTicketForEventData.ticket_quota} for event_id ${newTicketForEventData.event_id} created successfully`);
            result(null, res);
        }
    })
}

TicketForEventModel.getTicketAmountById = (ticketId, transactionCancel, result) => {
    transactionCancel.status = true;
    dbConn.query('SELECT * FROM ticket_for_event WHERE _id = ?', ticketId, (err, res) =>{
        if(err){
            console.log('Error while looking ticket for event data : ', err);
            result(null, err);
        }else{
            console.log(`Ticket with id ${ticketId} has been found`);
            result(null, res);
        }
    })
}


TicketForEventModel.decrementTicketAmount = (ticketId, amountOfPurchase, result) => {
    dbConn.query('UPDATE ticket_for_event SET ticket_quota = ticket_quota - ? WHERE _id= ?', [amountOfPurchase, ticketId], (err, res)=>{
        if(err){
            console.log('Error while inserting data : ', err);
            result(null, err);
        }else{
            console.log(`Ticket id ${ticketId} has been decremented with ${amountOfPurchase} units`);
            result(null, res);
        }

    })
}


module.exports = TicketForEventModel;