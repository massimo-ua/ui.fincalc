'use strict'
angular.module('calcApp.input.controllers', [])
.controller('InputHomeController', ['$scope', function($scope) {

}])
.controller('ProductsInputController', ['$scope', 'InputParams', function($scope, InputParams) {
	$scope.products = {};
	$scope.minNumberOfProducts = InputParams.NumberOfProducts();
	$scope.maxNumberOfProducts = InputParams.MaxNumberOfProducts();
	$scope.numberOfProducts = $scope.minNumberOfProducts;
	$scope.rangeInYears = InputParams.ForecastRangeInYears();
	$scope.startYear = InputParams.StartYear();
	$scope.addProduct = function() {
		if ($scope.numberOfProducts >= $scope.maxNumberOfProducts) return;
		$scope.numberOfProducts += 1; 
	}
	$scope.removeProduct = function() {
		if ($scope.numberOfProducts <= $scope.minNumberOfProducts) return;
		try {
    		delete $scope.products.data[$scope.numberOfProducts];
		}
		catch(err) {
    		if(err instanceof TypeError) {
      			console.log('Trying to remove empty product instance!');
   			}
   			else {
   				console.log(err);
   			}
		}
		$scope.numberOfProducts -= 1;
	}
}])
.controller('PLInputController', ['$scope', 'InputParams', function($scope, InputParams){
	$scope.pl = {};
	$scope.rangeInYears = InputParams.ForecastRangeInYears();
	$scope.startYear = InputParams.StartYear();
}])
.controller('WorkingCapitalInputController', ['$scope', 'InputParams', function($scope, InputParams){
	$scope.workingcapital = {};
	$scope.rangeInYears = InputParams.ForecastRangeInYears();
	$scope.startYear = InputParams.StartYear();
}])
.controller('LiabilitiesInputController', ['$scope', 'InputParams', function($scope, InputParams){
	$scope.liabilities = {};
	$scope.rangeInYears = InputParams.ForecastRangeInYears();
	$scope.startYear = InputParams.StartYear();
}])
.controller('DEBTInputController', ['$scope', 'InputParams', function($scope, InputParams){
	$scope.debt = {};
	$scope.rangeInYears = InputParams.ForecastRangeInYears();
	$scope.startYear = InputParams.StartYear();
}])
.controller('CapitalStockInputController', ['$scope', 'InputParams', function($scope, InputParams){
	$scope.capitalstock = {};
	$scope.rangeInYears = InputParams.ForecastRangeInYears();
	$scope.startYear = InputParams.StartYear();
}])
.controller('RetainedEarningsInputController', ['$scope', 'InputParams', function($scope, InputParams){
	$scope.retainedearnings = {};
	$scope.rangeInYears = InputParams.ForecastRangeInYears();
	$scope.startYear = InputParams.StartYear();
}])
.controller('OpeningBalanceInputController', ['$scope', 'InputParams', function($scope, InputParams){
	$scope.openingbalance = {};
	$scope.rangeInYears = InputParams.ForecastRangeInYears();
	$scope.startYear = InputParams.StartYear();
	$scope.currentYear = InputParams.CurrentYear();
}]);