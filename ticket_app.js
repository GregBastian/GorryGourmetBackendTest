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

const ticketRoutes = require('./src/routes/ticket_location.routes');
app.use('/api/v1/location/', ticketRoutes);

app.listen(port, () => {
	console.log("Server is running at port "+ port)
});