'use strict';

/* Services */
/*mediaApp.factory('MediaService', function($resource, $q){
    var music = $resource('https://itunes.apple.com/:action',
        { action: "search", callback: 'JSON_CALLBACK'},
        { 'get':  {method: 'JSONP'} });


    return {
        search: function(query,type,limit) {
            var q = $q.defer();

            music.get({
                term: query, media: type, limit: limit
            }, function(resp) {
                q.resolve(resp);
            }, function(err) {
                q.reject(err);
            })

            return q.promise;
        }
    }
})*/


// Shared data from settings needed by different controllers
mediaApp.service('DirectorService', function() {
    var _locationA = "";
    var _locationB = "";

    return {
        getLocationA: function() {
            return _locationA;
        },
        setLocationA: function(locationA) {
            _locationA = locationA;
        },
        getLocationB: function() {
            return _locationB;
        },
        setLocationB: function(locationB) {
            _locationB = locationB;
        },
        hasLocationA: function() {
            return _locationA == null ? false:true;
        },
        hasLocationB: function() {
            return _locationB == null ? false:true;
        }
    };
});


mediaApp.service('SearchBusService', function($numberBus) {

    return {
        searchBusNumber: function() {
            return "";
        }
    };
    
});




