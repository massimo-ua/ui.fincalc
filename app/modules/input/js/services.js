'use  strict'
angular.module('calcApp.input.services',[])
.factory('InputParams', ['GlobalConfiguration', function(GlobalConfiguration) {
	return {
		NumberOfProducts: function() {
			return GlobalConfiguration.inputs.products.initNumberOfProducts;
		},
		ForecastRangeInYears: function() {
			return GlobalConfiguration.inputs.global.forecastRangeInYears;
		},
		StartYear: function() {
			return GlobalConfiguration.inputs.global.currentYear - GlobalConfiguration.inputs.global.yearsHistoryDepth;
		},
		MaxNumberOfProducts: function() {
			return GlobalConfiguration.inputs.products.maxNumberOfProducts;
		},
		CurrentYear: function() {
			return GlobalConfiguration.inputs.global.currentYear;
		},

	}
}]);