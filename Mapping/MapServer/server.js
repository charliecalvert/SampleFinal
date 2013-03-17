var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

// We need this here to make POST call work
app.use(express.bodyParser());
var numbersFileName = 'data/AddNumbers.json';


app.get('/', function(req, res) {
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.end(html);
});


app.get('/getData', function(request, response) {
	console.log("Get Presidents called");
	var json = fs.readFileSync(numbersFileName);
	response.send(json);
});

function writeToFile(fileName, json) {
	fs.writeFile(fileName, json, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("JSON saved to " + fileName);
			return {
				"result" : "success"
			};
		}
	});
}

app.post('/addToFive', function(request, response) {
	console.log("AddToFive called");
	console.log("request.body: " + JSON.stringify(request.body));	
	console.log("request.body.value: " + request.body.value);
	
	var input = parseInt(request.body.value);
	var newNumber = input + 5;
	var jsonResult = { result : "Success", inputValue: input, newNumberValue: newNumber }
	writeToFile(numbersFileName, JSON.stringify(jsonResult, null, 4))
	response.send( jsonResult );
});

app.get('/addToNine', function(request, response) {	
	console.log('AddToNine request.query: ' + JSON.stringify(request.query));
	console.log('AddToNine request.query.userNumber: ' + request.query.userNumber);
	try {
		var newValue = parseInt(request.query.userNumber) + 9;
	} catch(error) {
		console.log(error);
	}
	response.send( { result : "Success", value: newValue } );
});

app.use("/public", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);