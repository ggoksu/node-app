var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello Oracle Application Container Cloud!');
});

app.listen(process.env.PORT, function () {
	console.log('Node app is running...');
});