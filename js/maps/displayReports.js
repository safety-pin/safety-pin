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


    var map = new google.maps.Map(element, options);

    var markers = [];
    google.maps.event.addListener(map, "rightclick", function(event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        var position = new google.maps.LatLng(lat, lng);

        if(markers.length==1){
            markers[0].setMap(null);
            markers = [];
        }
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: "Odabrana lokacija",
            icon: 'images/50/red-pin1.png'
        });
        markers.push(marker);
        $("#reportLat").val(lat);
        $("#reportLng").val(lng);
        function geocodePosition(position) {
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ //OVO NE RADI, NADJI GDE JE GEOCODER!!!!
                latLng: position
            }, function(responses) {
                if (responses && responses.length > 0) {
                    $('#reportAddress').text(responses[0].formatted_address);
                } else {
                    console.log(responses);
                    $('#reportAddress').text("Adresa ne može biti pronađena!");
                }
            });
        }
        geocodePosition(position);
    });
    //ispis rezultata sa servera
    $.getJSON(config.ip+"reports",
        function (json) {
            var solvedMarkers = 0;
            var totalMarkers = 0;
            json.forEach(function (currentValue) {

                //var infoWindow = new google.maps.InfoWindow();
                //infoWindow.setOptions({
                //	position: new google.maps.LatLng(currentValue.lat, currentValue.lng)
                //});
                var icon = 'images/50/green-pin1.png';
                totalMarkers+= 1;
                if(currentValue.status===true){
                    icon = 'images/50/yellow-pin1.png';
                    solvedMarkers += 1;
                }
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(currentValue.lat, currentValue.lng),
                    map: map,
                    title: String(currentValue.id),
                    icon: icon
                });
                marker.addListener('click', function (event){
                    //ispisi info o markeru, info window
                });

            });
            $('#total').text(totalMarkers);
            $('#solved').text(solvedMarkers);
        });

}(window, google));


