/**
 * @author Charlie Calvert
 * Assignment: Fix bug that causes the insertCity method to never be called.
 */
ELF.own.DataInput = (function() {

	var cities = [];

	function DataInput() {
		$("#getCities").click(getCities);
		$("#insertCity").click(insertCity);
		$("#saveCities").click(saveCities);
		$("#cityList").change(cityPicked);
		cities[0] = {
			CityName : "No City",
			Description : "Select GetCities",
			Latitude : 0.0,
			Longitude : 0.0
		};
		displayCity(cities[0]);
	}

	function getUserNumber() {
		return $("#userNumber").val();
	}

	function cityPicked() {
		$("#cityList option:selected").each(function() {
			var cityName = $(this).text();
			$.each(cities, function() {
				if (this.CityName === cityName) {
					displayCity(this);
				}
			});
		});
	};

	function displayCity(city) {
		ELF.run.utility.setCurrentCity(city);
		$("#cityName").val(city.CityName);
		$("#description").val(city.Description);
		$("#latitude").val(city.Latitude);
		$("#longitude").val(city.Longitude);
	}

	// This is the best way to POST data to the server
	function saveCities() {
		var data = {
			value : getUserNumber()
		};

		$.ajax({
			type : "POST",
			url : '/saveCities',
			dataType : "json",
			cache : 'False',
			data : data,
			success : function(json) {
				var result = "<p>Result: " + json.result + "</p>";
				var value = "<p>Value: " + json.newNumberValue + "</p>";
				$("#resultDiv").html(result + value);
			},
			error : showError
		});
	};

	var showCities = function(cities) {
		$("#cityList").empty();
		$.each(cities, function() {
			var option = '<option>' + this.CityName + '</option>'
			$("#cityList").append(option);
		});
		$("#cityList").selectmenu('refresh', true);
	};

	// This is a okay way to post data to the server
	// If you need to pass a lot of data, use POST,
	// as shown above.
	function getCities() {
		$.getJSON('/getCities', function(data) {
			console.log("csc: Parsing data in getCities");
			cities = data;
			displayCity(data[0]);
			showCities(cities);
		}).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			console.log("csc: Error. getCities failed");
			showError(jqXHR, textStatus, errorThrown);
		}).complete(function() {
			console.log("csc: completed call to get getCities");
		});
	}

	function getNewCity() {
		var city = {};
		city.CityName = $.trim($('#cityName').val());
		// Assignment:
		// Fill in the other three fields: Description, Latitude, Longitude
		return city;
	}

	var insertCity = function() {
		city = getNewCity();
		if (city) {
			insertRecord(city);
		}
	};

	var insertRecord = function(city) {
		showDebug("inserting: " + city.CityName);
		// Assignment: Add the city to the cities array
		showCities(cities);
	};
	
	var saveCities = function() {
		var data = { details: 'cities', data: JSON.stringify(cities) };
		// Assignment: Write the ajax call that posts the data to the server
	}

	var showError = function(request, ajaxOptions, thrownError) {
		showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
		showDebug(request.status);
		showDebug(request.statusText);
		showDebug(request.getAllResponseHeaders());
		showDebug(request.responseText);
	};

	var showDebug = function(data) {
		$("#debugList").append("<li>" + data + "</li>");
	};

	return DataInput;
})();

