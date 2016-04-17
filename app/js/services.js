'use strict'
angular.module('calcApp.services',[])
.constant('GlobalConfiguration', {
	inputs: {
		global: {
			yearsHistoryDepth: 1,
			forecastRangeInYears: 2,
			currentYear: new Date().getFullYear()
		},
		products: {
			initNumberOfProducts: 1,
			maxNumberOfProducts: 10
		}
	}
});