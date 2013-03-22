/*jshint devel: true, browser: true, jquery: true, strict: true */
/*global ELF: false */

ELF.own.Main = (function() {'use strict';

	ELF.run.utility = new ELF.own.Utility();
	var dataInput = null;
	ELF.run.geoCode = null;
	
    // Application Constructor
    function Main() {        
        console.log("debug: App constructor called");
        bindEvents();
    }

    /*     
     * Bind any events that are required on startup. 
     * Common events: 'load', 'deviceready', 'offline', and 'online'. 
    */
    var bindEvents = function() {
        console.log("debug: App bindEvents called");
        document.addEventListener('deviceready', onDeviceReady, false);
        // $("#cityList").change(ELF.run.utility.cityPicked);
        $("#page1").on("pageshow", pageShow);
        dataInput = new ELF.own.DataInput();
        showMap();
    };

	var pageShow = function(data) {
		var cityName = ELF.run.utility.getCurrentCityName();
		ELF.run.geoCode.geoCode(cityName);
		// ELF.run.geoCode.setZoom(7);	
	};
	
    // Called when device is fully initialized   
    var onDeviceReady = function() {
        console.log("debug: App onDeviceReady called");        
        showProgramState();                
        showDate();        
    };

	var showMap = function() {		
		ELF.run.geoCode = new ELF.own.GeoCode(47.6062095, -122.3320708);
		ELF.run.geoCode.geoCode("Bellevue, WA");
	};	
	
    var showProgramState = function() {
        var listeningElement = $('.listening');
        var receivedElement = $('.received');
        listeningElement.attr('style', 'display:none;');
        receivedElement.attr('style', 'display:block;');
    };
    
    var showDate = function() {
        console.log('debug: showDate called');        
        $("#curDate").html("Current Date: " + ELF.run.utility.getToday());
    };

    return Main;
})();

$(document).ready(function() {"use strict";
    new ELF.own.Main();
});
