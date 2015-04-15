'use strict';

angular.module('tableApp')
		.service('hotelService', function hotelService($http, $q) {
			var deferred = $q.defer();
			$http.get('json/hotels.json').then(function(data) {
				deferred.resolve(data);
			});

			this.getHotels = function() {
				return deferred.promise;
			};
		});
