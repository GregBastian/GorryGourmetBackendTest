const dbConn = require('../config/db.config')

var TicketLocationModel = function(ticketLocationModel){
    this.event_id       =   ticketLocationModel.event_id;
    this.event_name     =   ticketLocationModel.event_name;
    this.location       =   ticketLocationModel.location;
}


TicketLocationModel.createLocation = (LocationNewData, result) =>{
    dbConn.query('INSERT INTO ticket_location SET ? ', LocationNewData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('New event created successfully');
            result(null, res)
        }
    })
}


module.exports = TicketLocationModel;