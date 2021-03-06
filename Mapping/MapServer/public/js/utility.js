/**
 * @author Charlie Calvert
 */

/*jshint devel: true, browser: true, jquery: true, strict: true */

ELF.own.Utility = (function() {'use strict';

	var googleMap = null;
	var currentCity = null;
	
    function Utility() {}
    
    Utility.prototype.zeroFill = function(number, width) {
        console.log("debug: zeroFill called");
        width -= number.toString().length;
        if (width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + "";
        // always return a string
    };

    Utility.prototype.getToday = function() {
        console.log("debug: getToday called");
        var today = new Date();
        var day = today.getDate();        
        
        var month = today.getMonth() + 1;        
        var year = today.getFullYear();
        day = this.zeroFill(day, 2);
        month = this.zeroFill(month, 2);
        
        return month + '/' + day + '/' + year;
    };
    
    var makeMarker = function(initPosition, initTitleString) {
		var marker = new google.maps.Marker({
			map : googleMap,
			position : initPosition,
			title : initTitleString
		});
	}
	
    Utility.prototype.showMap = function(latitude, longitude) {
		// geocoder = new google.maps.Geocoder();
		var startPosition = new google.maps.LatLng(latitude, longitude);
		var mapOptions = {
			zoom : 8,
			center : startPosition,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		var mapCanvas = $('#mapCanvas');
		googleMap = new google.maps.Map(mapCanvas[0], mapOptions);
		makeMarker(startPosition, "init at Seattle");
	}
	
	Utility.prototype.setCurrentCity = function(city) {	
		currentCity = city;	
	};
	
	Utility.prototype.getCurrentCity = function() {
		return currentCity;
	}
	
	Utility.prototype.getCurrentCityName = function() {
		return currentCity.CityName;
	}
	
	
    return Utility;    
})();
