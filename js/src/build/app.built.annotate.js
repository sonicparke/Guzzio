var app = angular.module('Guzzio', []);
app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/AddFuelUp', {
      templateUrl: 'partials/addFuelUp.html',
      controller: 'AddFuelUpCtrl',
      reloadOnSearch: false
    });
    $routeProvider.otherwise({
      redirectTo: '/',
      templateUrl: 'partials/main.html',
      reloadOnSearch: false
    });
  }
]);
app.controller('AddFuelUpCtrl', [
  '$scope',
  function ($scope) {
    $scope.name = 'Brad';
  }
]);
app.controller('FuelUpFormCtrl', [
  '$scope',
  function ($scope) {
    $scope.fuelup = [];
    $scope.submit = function () {
      console.log($scope.fuelup);
    };
  }
]);
app.controller('MainCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.setRoute = function (route) {
      console.log('Route Fired: ', route);
      $location.path(route);
    };
  }
]);