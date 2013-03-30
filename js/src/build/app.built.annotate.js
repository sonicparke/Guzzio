var app = angular.module('Guzzio', [
    'ui.bootstrap',
    'mongolabResourceHttp'
  ]);
app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/FuelUpsList', {
      templateUrl: 'partials/fuelUpsList.html',
      controller: 'FuelUpsListCtrl',
      resolve: {
        fuelUps: function (FuelUp) {
          return FuelUp.all();
        }
      }
    });
    $routeProvider.when('/AddFuelUp', {
      templateUrl: 'partials/addFuelUp.html',
      controller: 'AddFuelUpCtrl',
      reloadOnSearch: false,
      resolve: {
        fuelUp: function (FuelUp) {
          return new FuelUp();
        }
      }
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
  '$location',
  'fuelUp',
  function ($scope, $location, fuelUp) {
    $scope.name = 'Brad';
    $scope.fuelUp = fuelUp;
    $scope.previousFuelUp = { odometer: 1000 };
    $scope.submit = function () {
      $scope.calculate($scope.fuelUp);
    };
    $scope.calculate = function (data) {
      $scope.save();
    };
    var changeSuccess = function () {
      $location.path('/FuelUpsList');
    };
    var changeError = function () {
      throw new Error('Sth went wrong...');
    };
    $scope.save = function () {
      $scope.fuelUp.$save(changeSuccess, changeSuccess, changeError, changeError);
    };
    $scope.abandonChanges = function () {
      $location.path('/FuelUpsList');
    };
    $scope.hasChanges = function () {
      return !angular.equals($scope.fuelUp);
    };
  }
]);
app.controller('FuelUpsListCtrl', [
  '$scope',
  '$location',
  'fuelUps',
  function ($scope, $location, fuelUps) {
    $scope.fuelUps = fuelUps;
    console.log($scope.fuelUps);
    $scope.newFuelUp = function () {
      $location.path('/AddFuelUp');
    };
  }
]);
app.controller('MainCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.setRoute = function (route) {
      $location.path(route);
    };
  }
]);
app.filter('roundTo2', function () {
  return function (num) {
    return Math.round(num * 100) / 100;
  };
});
app.constant('MONGOLAB_CONFIG', {
  API_KEY: 'r0hOwANUyGVafSYyFF_KYFRCVqDizPG3',
  DB_NAME: 'guzziodb'
});
app.factory('FuelUp', [
  '$mongolabResourceHttp',
  function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('FuelUps');
  }
]).factory('Vehicles', function ($mongolabResourceHttp) {
  return $mongolabResourceHttp('Vehicles');
});