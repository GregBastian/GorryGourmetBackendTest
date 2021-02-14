const dbConn = require('../config/db.config')

var TransactionEventModel = function(transactionEvent){
    this.nomorHp        =   transactionEvent.nomorHp;
    this.event_id       =   transactionEvent.event_id;
    this.event_name     =   transactionEvent.event_name;
    this.ticket_id      =   transactionEvent.ticket_id;
    this.ticket_type    =   transactionEvent.ticket_type;
    this.ticket_amount  =   transactionEvent.ticket_amount;
}

TransactionEventModel.createTransaction = (newTicketForEventData, result) =>{
    dbConn.query('INSERT INTO ticket_for_event SET ? ', newTicketForEventData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log(`New Ticket ${newTicketForEventData.ticket_type} with quota of 
                ${newTicketForEventData.ticket_quota} for event_id ${newTicketForEventData.event_id} created successfully`);
            result(null, res);
        }
    })
}

TransactionEventModel.getEventByID = (id, result)=>{
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

TransactionEventModel.createEvent = (eventNewData, result) =>{
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

module.exports = TransactionEventModel;