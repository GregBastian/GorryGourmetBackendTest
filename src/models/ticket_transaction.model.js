const dbConn = require('../config/db.config')

var TransactionEventModel = function(transactionId,transactionEvent, ticketInfo){
    this.transaction_id =   transactionId;
    this.phone_number   =   transactionEvent.phone_number;
    this.event_id       =   transactionEvent.event_id;
    this.event_name     =   transactionEvent.event_name;
    this.ticket_id      =   ticketInfo.ticket_id;
    this.ticket_type    =   ticketInfo.ticket_type;
    this.ticket_amount  =   ticketInfo.ticket_amount;
}


TransactionEventModel.createTransaction = (newTransactionData, result) =>{
    dbConn.query('INSERT INTO ticket_transaction SET ? ', newTransactionData, (err, res)=>{
        if(err){
            console.log('Error while inserting new ticket transactions :', err);
            result(null, err);
        }else{
            console.log(`Transaction for ${newTransactionData.ticket_type} with amount of ${newTransactionData.ticket_amount} 
                for event_id ${newTransactionData.event_id} created successfully`);
            result(null, res);
        }
    })
}

// TransactionEventModel.getEventByID = (id, result)=>{
//     dbConn.query('SELECT * FROM ticket_event WHERE _id=?', id, (err, res)=>{
//         if(err){
//             console.log('Error while fetching event by id', err);
//             result(null, err);
//         }else{
//         	console.log(`Event with id ${id} successfully retrieved`);
//             result(null, res);
//         }
//     })
// }

// TransactionEventModel.createEvent = (eventNewData, result) =>{
//     dbConn.query('INSERT INTO ticket_event SET ? ', employeeReqData, (err, res)=>{
//         if(err){
//             console.log('Error while inserting data');
//             result(null, err);
//         }else{
//             console.log('New event created successfully');
//             result(null, res)
//         }
//     })
// }

module.exports = TransactionEventModel;