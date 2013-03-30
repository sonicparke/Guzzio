var app = angular.module('Guzzio', ['ui.bootstrap','mongolabResourceHttp']);

// app.config(['$locationProvider', function ($locationProvider){
//   $locationProvider.html5Mode(true);
// }]);

app.config(['$routeProvider', function ($routeProvider){


  $routeProvider.when('/FuelUpsList', {
    templateUrl:'partials/fuelUpsList.html',
    controller:'FuelUpsListCtrl',
    resolve:{
      // Vehicles:function(Vehicles){return Vehicles.all();},
      fuelUps:function(FuelUp){return FuelUp.all();}
    }
  });
  $routeProvider.when('/AddFuelUp', {
    templateUrl: 'partials/addFuelUp.html',
    controller: 'AddFuelUpCtrl',
    reloadOnSearch: false,
    resolve:{
      fuelUp:function(FuelUp){return new FuelUp();}
    }
  });
  $routeProvider.otherwise({
    redirectTo: '/',
    templateUrl: 'partials/main.html',
    reloadOnSearch: false
  });

}]);