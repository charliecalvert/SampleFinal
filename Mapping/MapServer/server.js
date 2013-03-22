var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

// We need this here to make POST call work
app.use(express.bodyParser());
var citiesFileName = 'data/MapData.json';


app.get('/', function(req, res) {
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.end(html);
});


app.get('/getCities', function(request, response) {
	console.log("Get Cities called");
	var json = fs.readFileSync(citiesFileName);
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

app.post('/saveCities', function(request, response) {
	console.log("saveCities called");
	console.log("request.body: " + JSON.stringify(request.body));	
	var details = request.body.details;
	console.log("Details: " + details);
	
	var obj = JSON.parse(request.body.data);
	writeToFile(citiesFileName, JSON.stringify(obj, null, 4));
	var jsonResult = { result : "Success" };
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