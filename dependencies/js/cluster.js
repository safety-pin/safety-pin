(function(window, google){
	
	//map options
	var options = {
		center: {
			lat: 44.802435,
			lng: 20.466390
		},
		zoom: 13,
		disabledDefaultUI: true,
		draggable: true,
		// maxZoom: 11,
		// minZoom: 9

	};
	element = document.getElementById('map');
	//map


	map = new google.maps.Map(element, options);
	
	// MCoptions = {
	// 	styles: [{
	// 		url: "",
	// 		height: '',
	// 		width: ''
	// 	},
	// 	{

	// 	},
	// 	{

	// 	}]
	// }
	var markerClusterer = new MarkerClusterer(map, []);
	
	$.getJSON("http://10.120.192.2:8081/open-data/api?limit=13000", 
		function(json){
			json.forEach(function(currentValue){

				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(currentValue.x,currentValue.y),
					map: map,
					title: String(currentValue.id)
				});
				markerClusterer.addMarker(marker)
			});

		});
	
}(window, google));


