app.controller('MainCtrl', function($scope, $location) {
  // console.log('Main Controller Fired');

  $scope.setRoute = function (route) {
    console.log('Route Fired: ', route);
    $location.path(route);
  };

});
