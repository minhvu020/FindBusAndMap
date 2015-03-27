'use strict';

mediaApp.controller('HomeCtrl', function () {
    
    $scope.mapOptions = {
            // Tá»�a Ä‘á»™ muá»‘n hiá»ƒn thá»‹ ban Ä‘áº§u (tung Ä‘á»™,vá»¹ Ä‘á»™)
            center: new google.maps.LatLng(10.771971, 106.697845),
            // Má»©c Ä‘á»™ zoom
            zoom: 8
        };

    $scope.initializeMap = function(){
        var map = new google.maps.Map(document.getElementById("map-canvas"),$scope.mapOptions);
    }
    
    $scope.initializeMapBus = function(){
      
        google.maps.event.addDomListener(window, 'load',$scope.initializeMap);
        
    }
    
})


mediaApp.controller('DirectionCtrl', function ($scope) {
    $scope.direction = function(){
       
    }

    $scope.linkTo = function(link){
       
    }
})

mediaApp.controller('BusHCMCtrl', function ($scope,SettingsService) {
       
})

mediaApp.controller('LocationCtrl', function ($scope,MediaService,$location,SettingsService,$rootScope) {
       
    $scope.list = [
                "Restaurant",
                "ATM",
                "Coffee",
                "Hotel"];
})


