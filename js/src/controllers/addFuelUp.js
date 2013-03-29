app.controller('AddFuelUpCtrl', function($scope) {
  $scope.name = 'Brad';

// $scope.fuelUp = {
    //     partial: true,
    //     missed: false
    // };

    $scope.previousFuelUp = {
        odometer: 1000
    };

    $scope.submit = function () {
        console.log($scope.fuelUp);
        $scope.calculate($scope.fuelUp);
    };

    $scope.calculate = function (data) {

        $scope.milesDriven = (data.odometer - $scope.previousFuelUp.odometer);

        $scope.currentMileage = ($scope.milesDriven % data.gallons);


        console.log($scope.milesDriven);
        console.log($scope.currentMileage);

    };

});