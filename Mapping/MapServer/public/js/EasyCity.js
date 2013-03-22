/**
 * @author Charlie Calvert
 */

/*jshint jquery:true, browser:true, strict: true */
/*global ELF:true*/

ELF.own.EasyCity = (function() {'use strict';

	function withValue(value) {
		var d = withValue.d || (withValue.d = {
			enumerable : false,
			writable : false,
			configurable : true,
			value : null
		});
		d.value = value;
		return d;
	}

	function President(initName, initDescription, initLatitude, initLongitude) {
		Object.defineProperty(this, "CityName", withValue(initName));
		Object.defineProperty(this, "Description", withValue(initDescription));
		Object.defineProperty(this, "Latitude", withValue(initLatitude));
		Object.defineProperty(this, "Longitude", withValue(initLongitude));
	}

	President.prototype.initFromJSON = function(json) {
		this.CityName = json.CityName;
		this.Description = json.Description;
		this.Latitude = json.Latitude;
		this.Longitude = json.Longitude;
	};

	President.prototype.toJSON = function() {
		return {
			CityName : this.CityName,
			Description : this.Description,
			Latitude : this.Latitude,
			Longitude : this.Longitude
		};
	};

	return President;
})();
