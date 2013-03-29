var app = angular.module('Guzzio', ['ui.bootstrap']]);

// app.config(['$locationProvider', function ($locationProvider){
//   $locationProvider.html5Mode(true);
// }]);

app.config(['$routeProvider', function ($routeProvider){

  $routeProvider.when('/AddFuelUp', {
    templateUrl: 'partials/addFuelUp.html',
    controller: 'AddFuelUpCtrl',
    reloadOnSearch: false
    // resolve: {
    //   checkRight: resolves.checkRights
    //   }
  });
  $routeProvider.otherwise({
    redirectTo: '/',
    templateUrl: 'partials/main.html',
    reloadOnSearch: false
  });

}]);
app.controller('AddFuelUpCtrl', function($scope) {
  $scope.name = 'Brad';
});

app.controller('FuelUpFormCtrl', function($scope) {

    $scope.fuelup = [];

    $scope.submit = function() {
        console.log($scope.fuelup);
    };
});
app.controller('MainCtrl', function($scope, $location) {
  // console.log('Main Controller Fired');

  $scope.setRoute = function (route) {
    console.log('Route Fired: ', route);
    $location.path(route);
  };

});
