const mysql = require('mysql');

// create here mysql connection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'node_js_gorry_ticket'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected to Local DB Success!');
})

module.exports = dbConn;
