var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello from Openshift!');
});

app.listen(process.env.PORT, function () {
	console.log('Node app is running...');
});
