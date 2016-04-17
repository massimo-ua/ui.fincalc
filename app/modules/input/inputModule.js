angular.module('calcApp.input', ['calcApp.input.controllers','calcApp.input.services'])
.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
	$stateProvider
	.state('input', {
		url: '/input',
		abstract: true,
		templateUrl: 'modules/input/views/input-home.html',
		controller: 'InputHomeController'
	})
	.state('input.Products', {
		url: '',
		controller: 'ProductsInputController',
		templateUrl: 'modules/input/views/input-products.html'
	})
	.state('input.PL', {
		url: '/pl',
		controller: 'PLInputController',
		templateUrl: 'modules/input/views/input-pl.html'
	})
	.state('input.WorkingCapital', {
		url: '/workingcapital',
		controller: 'WorkingCapitalInputController',
		templateUrl: 'modules/input/views/input-workingcapital.html'
	})
	.state('input.Liabilities', {
		url: '/liabilities',
		controller: 'LiabilitiesInputController',
		templateUrl: 'modules/input/views/input-liabilities.html'
	})
	.state('input.DEBT', {
		url: '/debt',
		controller: 'DEBTInputController',
		templateUrl: 'modules/input/views/input-debt.html'
	})
	.state('input.CapitalStock', {
		url: '/capitalstock',
		controller: 'CapitalStockInputController',
		templateUrl: 'modules/input/views/input-capitalstock.html'
	})
	.state('input.RetainedEarnings', {
		url: '/retainedearnings',
		controller: 'RetainedEarningsInputController',
		templateUrl: 'modules/input/views/input-retainedearnings.html'
	})
	.state('input.OpeningBalance', {
		url: '/openingbalance',
		controller: 'OpeningBalanceInputController',
		templateUrl: 'modules/input/views/input-openingbalance.html'
	});

}]);