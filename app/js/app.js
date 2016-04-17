angular.module('calcApp',['ui.router','calcApp.filters','calcApp.services','calcApp.home','calcApp.input']);
angular.module('calcApp').run(['$state', function($state) {
  $state.go('home');
}]);