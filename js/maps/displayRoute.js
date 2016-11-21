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
	// initService();

	// displayRoute(map);
}(window, google));


var directionsDisplay = new google.maps.DirectionsRenderer();
function displayRoute1(map) {


	// also, constructor can get "DirectionsRendererOptions" object
	directionsDisplay.setMap(map); // map should be already initialized.
	directionsDisplay.setOptions( { suppressMarkers: true } );

	var request = {
		origin : markers[0].getPosition(),
		destination : markers[1].getPosition(),
		travelMode : google.maps.TravelMode.DRIVING
	};
	var directionsService = new google.maps.DirectionsService();
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
			// console.log(JSON.stringify(response));

			parseMapsJson(response, routeMarkers);
		}
	});
}
var markers = [];
var routeMarkers = [];
var userClicked = false;
google.maps.event.addListener(map, "rightclick", function(event) {
	var lat = event.latLng.lat();
	var lng = event.latLng.lng();

	if (userClicked==true && markers.length == 1) {
		var endMarker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map,
			title: "Kraj",
			icon: 'resources/images/50/yellow-pin1.png'
		});
		markers.push(endMarker);

		// console.log(markers[0].getPosition().lat());
		// console.log(markers[0].getPosition().lng());
		// console.log(markers[1].getPosition().lat());
		// console.log(markers[1].getPosition().lng());

		displayRoute1(map, routeMarkers);

		userClicked = false;
	} else if(userClicked==false){
		if(markers.length>0){
			markers[0].setMap(null);
			markers[1].setMap(null);

			markers = [];
		}
		var startMarker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map,
			title: "Start",
			icon: 'resources/images/50/green-pin1.png'
		});
		userClicked = true;
		markers.push(startMarker);
	}



});