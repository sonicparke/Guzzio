app.controller('AddFuelUpCtrl', function($scope) {
  $scope.name = 'Brad';
});

app.controller('FuelUpFormCtrl', function($scope) {

    $scope.fuelup = [];

    $scope.submit = function() {
        console.log($scope.fuelup);
    };
});