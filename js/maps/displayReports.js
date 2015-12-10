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

        if(markers.length===1){
            markers[0].setMap(null);
            markers = [];
        }
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            title: "Odabrana lokacija",
            icon: 'images/50/red-pin1.png'
        });
        $("#reportLat").val(lat);
        $("#reportLng").val(lng);
    });
    //config.ip+"reports"
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


