app.controller('FuelUpsListCtrl', function($scope, $location, fuelUps) {

    $scope.fuelUps = fuelUps;
    console.log($scope.fuelUps);

    $scope.newFuelUp = function(){
        $location.path('/AddFuelUp');
    };

});