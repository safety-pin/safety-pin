(function(window, google){
	
	//map options
	var options = {
		center: {
			lat: 44.802487,
			lng: 20.466336
		},
		zoom: 15,
		disabledDefaultUI: true,
		draggable: true,
		// maxZoom: 11,
		// minZoom: 9

	};
	element = document.getElementById('map');
	//map
	map = new google.maps.Map(element, options);

	var circles = [{
		lat:44.802487, 
		lng:20.466336
	}, 
	{
		lat:44.797820, 
		lng:20.450344
	}, 
	{
		lat:44.815120, 
		lng:20.453117
	},
	{
		lat:44.787643, 
		lng:20.465843
	},{
		lat:44.791260, 
		lng:20.467371
	}];


	for (var i = 0; i < circles.length; i++) {
		var circle = new google.maps.Circle({
			map:map,
			center: new google.maps.LatLng (circles[i].lat, circles[i].lng),
			radius:200,
			strokeColor:"#cc2800",
			fillColor: "#ff471a",
			fillOpacity: 0.3,
		});
	};

	var limit = '200';
	var r = '200';
	var analyze = 'true';
	var dayOfWeek = '6';
	var from = "0";
	var to = "23";
	for (var i = 0; i < circles.length; i++) {
		var url = 'http://10.120.192.2:8081/open-data/api/circle?limit='+limit+'&r='+r+'&lat='+circles[i].lat+'&lng='+circles[i].lng+'&analyze=true&summary=Clear&d='+dayOfWeek+'&fromh='+from+'&toh='+to+'';
		console.log(url);
		$.getJSON(url, function(data){
			data = JSON.stringify(data);
			console.log(data);
			data = JSON.parse(data);
			data.forEach(function(currentValue){
				var icon = "";
				if(currentValue.type==1){
					icon = 'images/50/blue-pin.png';
				} else if (currentValue.type==2){
					icon = 'images/50/red-pin.png';
				}else {
					icon = 'images/50/black-pin.png';
				}
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(currentValue.x,currentValue.y),
					map: map,
					title: String(currentValue.id),
					icon: icon
				});
			});
		});	
	};
	
	
	
}(window, google));
