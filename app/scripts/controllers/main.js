'use strict';

angular.module('tableApp')
		.controller('MainCtrl', function($scope, hotelService) {

			// Get hotel data from service  
			var promise = hotelService.getHotels();
			promise.then(function(data) {
				$scope.hotels = data.data.Establishments;
			});

			// User refinements
			$scope.refinements = {
				searchString: '',
				starRating: 0,
				userRating: 0,
				trpRating: 0,
				maxCost: 7000,
				sortBy: '',
				sortReverse: false
			};

			// Included here for quick prototyping, refactor as filter
			$scope.refineMatch = function(hotel) {
				var passed = true;
				if (hotel.Stars < $scope.refinements.starRating) {
					passed = false;
				}
				if (hotel.UserRating < $scope.refinements.userRating) {
					passed = false;
				}
				if (hotel.MinCost > $scope.refinements.maxCost) {
					passed = false;
				}
				return passed;
			};
		});
