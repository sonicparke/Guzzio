var app = angular.module('Guzzio', ['ui.bootstrap']);
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
    $scope.previousFuelUp = { odometer: 1000 };
    $scope.submit = function () {
      console.log($scope.fuelUp);
      $scope.calculate($scope.fuelUp);
    };
    $scope.calculate = function (data) {
      $scope.milesDriven = data.odometer - $scope.previousFuelUp.odometer;
      $scope.currentMileage = $scope.milesDriven % data.gallons;
      console.log($scope.milesDriven);
      console.log($scope.currentMileage);
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