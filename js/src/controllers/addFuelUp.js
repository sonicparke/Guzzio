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
        $scope.calculate($scope.fuelUp);
    };

    $scope.calculate = function (data) {

        $scope.milesDriven = (data.odometer - $scope.previousFuelUp.odometer);

        // $scope.currentMileage = ((data.odometer - $scope.previousFuelUp.odometer) / data.gallons);
        $scope.currentMileage = ($scope.milesDriven / data.gallons);

        $scope.fuelUpCost = (data.gallons * data.price);

    };


});