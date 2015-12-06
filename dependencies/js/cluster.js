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

	var MCoptions1 = {
		styles: [{
			textColor: 'white',
			url: 'images/Big_Pin_blue.png',
			height: '50',
			width: '50'
		},
		{
			textColor: 'white',
			url: 'images/Big_Pin_blue.png',
			height: '50',
			width: '50'
		},
		{
			textColor: 'white',
			url: 'images/Big_Pin_blue.png',
			height: '50',
			width: '50'
		}]
	}
	var MCoptions2 = {
		styles: [{
			textColor: 'white',
			url: 'images/Big_Pin.png',
			height: '50',
			width: '50'
		},
		{
			textColor: 'white',
			url: 'images/Big_Pin.png',
			height: '50',
			width: '50'
		},
		{
			textColor: 'white',
			url: 'images/Big_Pin.png',
			height: '50',
			width: '50'
		}]
	}
	var MCoptions3 = {
		styles: [{
			textColor: 'white',
			url: 'images/Big_Pin_black.png',
			height: '50',
			width: '50'
		},
		{
			textColor: 'white',
			url: 'images/Big_Pin_black.png',
			height: '50',
			width: '50'
		},
		{
			textColor: 'white',
			url: 'images/Big_Pin_black.png',
			height: '50',
			width: '50'
		}]
	}

	var marker1 = new MarkerClusterer(map, [], MCoptions1);
	var marker2 = new MarkerClusterer(map, [], MCoptions2);
	var marker3 = new MarkerClusterer(map, [], MCoptions3);
	
	$.getJSON("http://10.120.192.2:8081/open-data/api?limit=1300", 
		function(json){
			json.forEach(function(currentValue){

				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(currentValue.x,currentValue.y),
					map: map,
					title: String(currentValue.id),
					icon: 'images/small_pin.png'
				});
				marker.addListener('click', function() {
					map.setCenter(marker.getPosition());
					//prikazati podatke o markeru kod vujketa, ovo je iznad je sranje
				});
				if(currentValue.type==1){
					marker1.addMarker(marker);
				}else if(currentValue.type==2){
					marker2.addMarker(marker);
				}else{
					marker3.addMarker(marker);
				}
			});

		});
	
}(window, google));


