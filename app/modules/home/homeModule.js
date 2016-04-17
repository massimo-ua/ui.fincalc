'use strict'
angular.module('calcApp.home', ['calcApp.home.controllers'])
.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/modules/home/views/home.html',
    controller: 'HomeController'
  })
}]);