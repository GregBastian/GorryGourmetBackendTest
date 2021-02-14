const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res, next)=>
{
	res.send('Hello World')
});

const eventRoutes = require('./src/routes/ticket_event.routes');
app.use('/api/v1/event/', eventRoutes);

const locationRoutes = require('./src/routes/ticket_location.routes');
app.use('/api/v1/location/', locationRoutes);

const transactionRoutes = require('./src/routes/ticket_transaction.routes')
app.use('/api/v1/transaction/', transactionRoutes)

app.listen(port, () => {
	console.log("Server is running at port "+ port)
});