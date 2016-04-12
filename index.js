var express = require("express");
var compression = require('compression');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));
app.use(compression());

app.use(express.static('dist'));

var port = process.env.PORT || 5000;

app.listen(port, function(){
	console.log('Listening on port ' + port);
});

app.get('/config.js', function(request, response){
	//Serve script containing environment configuration
	response.setHeader('Content-Type', 'application/javascript');

	var data = '';
	data += 'var API_URL = "' + process.env.API_URL + '";\n';

  response.send(data);
});
