(function (window, google) {

    //map options
    var options = {
        center: {
            lat: 44.802435,
            lng: 20.466390
        },
        zoom: 13,
        disabledDefaultUI: true,
        draggable: true
        // maxZoom: 11,
        // minZoom: 9

    };
    var element = document.getElementById('map');
    //map


    map = new google.maps.Map(element, options);

    

    $.getJSON("http://localhost:8081/open-data/api?limit=78",
        function (json) {
        	i = 0;
            json.forEach(function (currentValue) {
            	i++;
                //var infoWindow = new google.maps.InfoWindow();
                //infoWindow.setOptions({
                //	position: new google.maps.LatLng(currentValue.lat, currentValue.lng)
                //});
				icon = 'images/50/green-pin1.png';
				if(i%3==0){
					icon = 'images/50/yellow-pin1.png';
				}
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(currentValue.x, currentValue.y),
                    map: map,
                    title: String(currentValue.id),
                    dayOfWeek: currentValue.dayofWeek,
                    temp: currentValue.temperature,
                    prec: currentValue.precipitation,
                    summary: currentValue.summary,
                    type: currentValue.type,
                    date: currentValue.date,
                    icon: icon
                });
                marker.addListener('click', function () {
                    //map.setCenter(marker.getPosition());
                    // var value = "" + currentValue.dayOfWeek + currentValue.temperature + currentValue.precipitation + currentValue.summary + currentValue.type + currentValue.date + currentValue.id;
                    //console.log(value);
                    // infoWindow.setContent(value);
                    // infoWindow.open(map, marker);
                    console.log('Clicked!');
                    
                    //prikazati podatke o markeru kod vujketa, ovo je iznad je sranje
                });
                
            });
			$("#solved").text(i/3);
			$("#total").text(i);
        });
		$('#prijaviForma').submit(function(e){
				e.preventDefault();

				var br = $("#total").text();
				br = parseInt(br);
				br++;
				$("#total").text(br);

				return false;

			});
}(window, google));


