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

var directionsDisplay;
function displayRoute(map) {

    // var start = new google.maps.LatLng(28.694004, 77.110291);
    // var end = new google.maps.LatLng(28.72082, 77.107241);
    
    directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
    directionsDisplay.setMap(map); // map should be already initialized.
    
    var request = {
    	origin : 'Toronto',
    	destination : 'Montreal',
    	travelMode : google.maps.TravelMode.DRIVING
    };
    var directionsService = new google.maps.DirectionsService(); 
    directionsService.route(request, function(response, status) {
    	if (status == google.maps.DirectionsStatus.OK) {
    		directionsDisplay.setDirections(response);
    	}
    });
}
var directionsDisplay = new google.maps.DirectionsRenderer();
var firstTime = true;
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

            parseMapsJson(response);
        }
    });
}
var markers = [];
var userClicked = false;
google.maps.event.addListener(map, "rightclick", function(event) {
	var lat = event.latLng.lat();
	var lng = event.latLng.lng();

	if (userClicked==true && markers.length == 1) {
		var endMarker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map,
			title: "Kraj",
			icon: 'images/50/yellow-pin1.png',
		});
		markers.push(endMarker);

    	// console.log(markers[0].getPosition().lat());
    	// console.log(markers[0].getPosition().lng());
    	// console.log(markers[1].getPosition().lat());
    	// console.log(markers[1].getPosition().lng());
    	
    	displayRoute1(map);
    	
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
			icon: 'images/50/green-pin1.png',
    	});
    	userClicked = true;
    	markers.push(startMarker);
    }
    


});
function initService(){
	var service = new google.maps.places.AutocompleteService();
	$(document).ready(function(){
		$('#location').keyup(function(){
			var value = $('#location').val();
			if(value!=""){

				var sw = new google.maps.LatLng(44.547783, 20.184450);
				var ne = new google.maps.LatLng(44.974322, 20.758254);

				var bound = new google.maps.LatLngBounds(sw,ne);
				service.getPlacePredictions({input: value, bounds:bound, ComponentRestrictions:{country:'rs'}}, 
					function(predictions, status){
						if (status != google.maps.places.PlacesServiceStatus.OK) {
							alert(status);
							return;
						}
						$('.result').html("");
						var i = 0;
						predictions.forEach(function(prediction){
							var li = document.createElement('li');
							li.className = "ui-widget-content";
							li.appendChild(document.createTextNode(prediction.description));
							$(".result").append(li);

						});
						$( "#selectable" ).selectable();
					});
			}else {
				$('.result').html("");
			}
		});
		$('#selectable').change(function(){
			var value = $('.ui-selected').val();
			$('#location').val(value);
		});
	});
	
}