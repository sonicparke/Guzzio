app.controller('AddFuelUpCtrl', function($scope, $location, fuelUp) {
    $scope.name = 'Brad';
    $scope.fuelUp = fuelUp;

    $scope.previousFuelUp = {
        odometer: 1000
    };

    $scope.submit = function () {
        $scope.calculate($scope.fuelUp);
        // $scope.save();
    };
    $scope.calculate = function (data) {

        // $scope.miles = (data.odometer - $scope.previousFuelUp.odometer);
        // $scope.mpg = ($scope.miles / data.gallons);
        // $scope.fuelUpCost = (data.gallons * data.price);

        // $scope.fuelUp = {
        //     miles: $scope.miles,
        //     mpg: $scope.mpg,
        //     fuelUpCost: $scope.fuelUpCost
        // };

        // console.log($scope.fuelUp);
        $scope.save();
    };


    // mongolabResourceHttp Stuff
    var changeSuccess = function() {
        $location.path('/FuelUpsList');
    };

    var changeError = function() {
        throw new Error('Sth went wrong...');
    };

    $scope.save = function(){
        $scope.fuelUp.$save(changeSuccess, changeSuccess, changeError, changeError);
    };

    $scope.abandonChanges = function() {
        $location.path("/FuelUpsList");
    };

    $scope.hasChanges = function(){
        return !angular.equals($scope.fuelUp);
    };


});