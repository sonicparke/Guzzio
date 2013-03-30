
app.constant('MONGOLAB_CONFIG',{API_KEY:'r0hOwANUyGVafSYyFF_KYFRCVqDizPG3', DB_NAME:'guzziodb'});

app
    .factory('FuelUp', function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('FuelUps');
    })
    .factory('Vehicles', function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('Vehicles');
    });
