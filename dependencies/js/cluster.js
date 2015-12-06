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

    var MCoptions1 = {
        styles: [{
            textColor: 'white',
            url: 'images/50/blue-cluster.png',
            height: '44',
            width: '44'
        },
            {
                textColor: 'white',
                url: 'images/50/blue-cluster.png',
                height: '44',
                width: '44'
            },
            {
                textColor: 'white',
                url: 'images/50/blue-cluster.png',
                height: '44',
                width: '44'
            }]
    };
    var MCoptions2 = {
        styles: [{
            textColor: 'white',
            url: 'images/50/red-cluster.png',
            height: '44',
            width: '44'
        },
            {
                textColor: 'white',
                url: 'images/50/red-cluster.png',
                height: '44',
                width: '44'
            },
            {
                textColor: 'white',
                url: 'images/50/red-cluster.png',
                height: '44',
                width: '44'
            }]
    };
    var MCoptions3 = {
        styles: [{
            textColor: 'white',
            url: 'images/50/black-cluster.png',
            height: '44',
            width: '44'
        },
            {
                textColor: 'white',
                url: 'images/50/black-cluster.png',
                height: '44',
                width: '44'
            },
            {
                textColor: 'white',
                url: 'images/50/black-cluster.png',
                height: '44',
                width: '44'
            }]
    };

    var marker1 = new MarkerClusterer(map, [], MCoptions1);
    var marker2 = new MarkerClusterer(map, [], MCoptions2);
    var marker3 = new MarkerClusterer(map, [], MCoptions3);

    $.getJSON("http://10.120.192.2:8081/open-data/api?limit=13000",
        function (json) {
            json.forEach(function (currentValue) {

                //var infoWindow = new google.maps.InfoWindow();
                //infoWindow.setOptions({
                //	position: new google.maps.LatLng(currentValue.lat, currentValue.lng)
                //});

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
                });
                marker.addListener('click', function () {
                    //map.setCenter(marker.getPosition());
                    // var value = "" + currentValue.dayOfWeek + currentValue.temperature + currentValue.precipitation + currentValue.summary + currentValue.type + currentValue.date + currentValue.id;
                    //console.log(value);
                    // infoWindow.setContent(value);
                    // infoWindow.open(map, marker);
                    console.log('Clicked!');
                    $('#dayOfWeek p').html(marker.dayOfWeek);
                    //prikazati podatke o markeru kod vujketa, ovo je iznad je sranje
                });
                if (currentValue.type == 1) {
                    marker1.addMarker(marker);
                    marker.setIcon('images/50/blue-pin1.png');
                } else if (currentValue.type == 2) {
                    marker2.addMarker(marker);
                    marker.setIcon('images/50/red-pin1.png');
                } else {
                    marker3.addMarker(marker);
                    marker.setIcon('images/50/black-pin1.png');
                }
            });

        });
}(window, google));


