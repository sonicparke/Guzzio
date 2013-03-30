app.controller('MainCtrl', function($scope, $location) {
  // console.log('Main Controller Fired');

  $scope.setRoute = function (route) {
    $location.path(route);
  };

});
