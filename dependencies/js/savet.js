(function(window, google){
	
	//map options
	var options = {
		center: {
			lat: 44.802435,
			lng: 20.466390
		},
		zoom: 10,
		disabledDefaultUI: true,
		draggable: true,
		// maxZoom: 11,
		// minZoom: 9

	};
	element = document.getElementById('map');
	//map
	map = new google.maps.Map(element, options);
	
}(window, google));