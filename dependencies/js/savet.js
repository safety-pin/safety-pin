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

	var circle = new google.maps.Circle({
		map:map,
		center: new google.maps.LatLng (44.802487, 20.466336),
		radius:100,
		strokeColor:"#cc2800",
		fillColor: "#ff471a",
		fillOpacity: 0.3,
	});
	
}(window, google));

