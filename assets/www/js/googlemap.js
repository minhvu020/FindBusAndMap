function GoogleMap(latitude, longitude){
	var latlng = new google.maps.LatLng(latitude, longitude);
	var geocoder = new google.maps.Geocoder();
	var infowindow = new google.maps.InfoWindow();
	
	this.initialize = function(){
        var map = showMap();
        
        // Add marker to map
        var marker=new google.maps.Marker({
        	  position:latlng,
        	  title:'Gần hơn'
        	  });
        marker.setMap(map);
        	

        // Zoom to ++ when clicking on marker
        var zoomSize = 10;
		google.maps.event.addListener(marker, 'click', function() {
			zoomSize = zoomSize + 1;
			if(zoomSize > 16)
				zoomSize = 10;
			map.setZoom(zoomSize);
			map.setCenter(marker.getPosition());
			geocoder.geocode({'latLng': latlng}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					if (results[1]) {
						infowindow = new google.maps.InfoWindow({content: results[1].formatted_address});
						infowindow.open(map,marker);
					} else {
						// Vị trí không thể xác định đích tên
					}
		          } else {
		            // Thất bại trong việc tìm tên
		          }
			    });
		});
    }    
    
    var showMap = function() {
		var mapProp = {center : latlng, zoom : 10, mapTypeId : google.maps.MapTypeId.ROADMAP};
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapProp);
		return map;
	}
}
