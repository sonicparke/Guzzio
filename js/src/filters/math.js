app.filter('roundTo2', function(){
    return function (num) {
        return Math.round(num * 100) / 100;
    };
});