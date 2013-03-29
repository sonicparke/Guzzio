var app = angular.module('Guzzio', ['ui.bootstrap']);

app.config(['$locationProvider', function ($locationProvider){
  $locationProvider.html5Mode(true);
}]);

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

}])