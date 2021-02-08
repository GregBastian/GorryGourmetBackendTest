const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res, next)=>
{
	res.send('Hello World')
});

app.listen(port, () => {
	console.log("Server is running at port "+ port)
});