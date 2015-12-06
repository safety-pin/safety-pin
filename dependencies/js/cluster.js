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

    $.getJSON("http://10.120.192.2:8081/open-data/api?limit=130",
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
                    var time = currentValue.date;
                    var timeTrim = time.substring(11, 16);
                    var dateTrim = time.substring(0, 10);
                    $('#dayOfWeek').text(currentValue.dayOfWeek);
                    $('#time').text(timeTrim);
                    $('#date1').text(dateTrim);
                    switch (currentValue.type) {
                        case 1:
                            $("#centriraj-sliku").attr("src", "images/Safty-PIN-icon-set-26.png");
                            $('#tip-nesrece').text('Materijalna steta');
                            break;
                        case 2:
                            $("#centriraj-sliku").attr("src", "images/povrede.png");
                            $('#tip-nesrece').text('Sa povredama');
                            break;
                        case 3:
                            $("#centriraj-sliku").attr("src", "images/smrt.png");
                            $('#tip-nesrece').text('Smrtni ishod');
                            break;
                    }

                    switch (currentValue.summary) {
                        case 'Clear':
                            $("#oblacic").attr("src", "images/Clear.png");
                            $('#padavina').text('suncano');
                            console.log(currentValue.summary);
                            break;
                        case 'Breezy and Mostly Cloudy':
                            $("#oblacic").attr("src", "images/Breezy and Mostly Cloudy.png");
                            $('#padavina').text('hladno i oblacno');
                            break;
                        case 'Partly Cloudy':
                            $("#oblacic").attr("src", "images/Partly Cloudy.png");
                            $('#padavina').text('mestimicno oblacno');
                            break;
                        case 'Mostly Cloudy':
                            $("#oblacic").attr("src", "images/Mostly Cloudy.png");
                            $('#padavina').text('pretezno oblacno');
                            break;
                        case 'Overcast':
                            $("#oblacic").attr("src", "images/Overcast.png");
                            $('#padavina').text('oblacno');
                            break;
                        case 'unknown':
                            $("#oblacic").attr("src", "images/unknown.png");
                            $('#padavina').text('nepoznatno');
                            break;
                        case 'Foggy':
                            $("#oblacic").attr("src", "images/Foggy.png");
                            $('#padavina').text('maglovito');
                            break;
                        case 'Breezy':
                            $("#oblacic").attr("src", "images/Breezy.png");
                            $('#padavina').text('prohladno');
                            break;
                        case 'Breezy and Overcast':
                            $("#oblacic").attr("src", "images/Breezy and Overcast.png");
                            $('#padavina').text('prohladno i oblacno');
                            break;
                        case 'Dry and Partly Cloudy':
                            $("#oblacic").attr("src", "images/Dry and Partly Cloudy.png");
                            $('#padavina').text('suvo i oblacno');
                            break;
                        case 'Windy and Mostly Cloudy':
                            $("#oblacic").attr("src", "images/Windy and Mostly Cloudy.png");
                            $('#padavina').text('vetrovito i oblacno');
                            break;
                        case 'Breezy and Partly Cloudy':
                            $("#oblacic").attr("src", "images/Breezy and Partly Cloudy.png");
                            $('#padavina').text('hladno i vedro');
                            break;
                        case 'Humid':
                            $("#oblacic").attr("src", "images/Humid.png");
                            $('#padavina').text('velika vlaznost');
                            break;
                    }

                    $('#temp-br').text(currentValue.temperature | 0);

                    var adresa = 'https://maps.googleapis.com/maps/api/streetview?size=400x250&location=' + currentValue.x + ',' + currentValue.y + '&heading=151.78&pitch=-0.76';
                   console.log(adresa);
                    $('#streetview').attr("src", adresa);

                    //prikazati podatke o markeru kod vujketa, ovo je iznad je sranje
                });
                if (currentValue.type == 1) {
                    marker1.addMarker(marker);
                    marker.setIcon('images/50/blue-pin.png');
                } else if (currentValue.type == 2) {
                    marker2.addMarker(marker);
                    marker.setIcon('images/50/red-pin.png');
                } else {
                    marker3.addMarker(marker);
                    marker.setIcon('images/50/black-pin.png');
                }
            });

        });
}(window, google));


