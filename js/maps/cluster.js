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

    function clusterOptions(image){
        var style = {
            textColor: 'white',
            url: image,
            height: '44',
            width: '44'
        };
        return {
            styles: [style, style, style]
        };
    }

    var marker1 = new MarkerClusterer(map, [], clusterOptions('images/50/blue-cluster.png'));
    var marker2 = new MarkerClusterer(map, [], clusterOptions('images/50/red-cluster.png'));
    var marker3 = new MarkerClusterer(map, [], clusterOptions('images/50/black-cluster.png'));

    $.getJSON(config.ip + "accidents/all",
        function (json) {
            json.forEach(function (currentValue) {



                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(currentValue.x, currentValue.y),
                    title: String(currentValue.id)
                });
                marker.addListener('click', function () {
                    //map.setCenter(marker.getPosition());
                    // var value = "" + currentValue.dayOfWeek + currentValue.temperature + currentValue.precipitation + currentValue.summary + currentValue.type + currentValue.date + currentValue.id;
                    //console.log(value);
                    // infoWindow.setContent(value);
                    // infoWindow.open(map, marker);

                    $.getJSON(config.ip + "accidents/" + currentValue.id,
                        function (pinData) {
                            var time = pinData.date;
                            var timeTrim = time.substring(11, 16);
                            var dateTrim = time.substring(0, 10);
                            $('#dayOfWeek').text(pinData.dayOfWeek);
                            $('#time').text(timeTrim);
                            $('#date1').text(dateTrim);
                            if (pinData.type === 1) {
                                $("#img-accident-type").attr("src", "images/Safty-PIN-icon-set-26.png");
                                $('#tip-nesrece').text('Materijalna steta');
                            } else if (pinData.type === 2) {
                                $("#img-accident-type").attr("src", "images/povrede.png");
                                $('#tip-nesrece').text('Sa povredama');
                            } else if (pinData.type === 3) {
                                $("#img-accident-type").attr("src", "images/smrt.png");
                                $('#tip-nesrece').text('Smrtni ishod');
                            }

                            if (pinData.summary === 'Clear') {
                                $("#oblacic").attr("src", "images/Clear.png");
                                $('#padavina').text('suncano');
                            } else if (pinData.summary === 'Breezy and Mostly Cloudy') {
                                $("#oblacic").attr("src", "images/Breezy and Mostly Cloudy.png");
                                $('#padavina').text('hladno i oblacno');
                            } else if (pinData.summary === 'Partly Cloudy') {
                                $("#oblacic").attr("src", "images/Partly Cloudy.png");
                                $('#padavina').text('mestimicno oblacno');
                            } else if (pinData.summary === 'Mostly Cloudy') {
                                $("#oblacic").attr("src", "images/Mostly Cloudy.png");
                                $('#padavina').text('pretezno oblacno');
                            } else if (pinData.summary === 'Overcast') {
                                $("#oblacic").attr("src", "images/Overcast.png");
                                $('#padavina').text('oblacno');
                            } else if (pinData.summary === 'unknown') {
                                $("#oblacic").attr("src", "images/unknown.png");
                                $('#padavina').text('nepoznatno');
                            } else if (pinData.summary === 'Foggy') {
                                $("#oblacic").attr("src", "images/Foggy.png");
                                $('#padavina').text('maglovito');
                            } else if (pinData.summary === 'Breezy') {
                                $("#oblacic").attr("src", "images/Breezy.png");
                                $('#padavina').text('prohladno');
                            } else if (pinData.summary === 'Breezy and Overcast') {
                                $("#oblacic").attr("src", "images/Breezy and Overcast.png");
                                $('#padavina').text('prohladno i oblacno');
                            } else if (pinData.summary === 'Dry and Partly Cloudy') {
                                $("#oblacic").attr("src", "images/Dry and Partly Cloudy.png");
                                $('#padavina').text('suvo i oblacno');
                            } else if (pinData.summary === 'Windy and Mostly Cloudy') {
                                $("#oblacic").attr("src", "images/Windy and Mostly Cloudy.png");
                                $('#padavina').text('vetrovito i oblacno');
                            } else if (pinData.summary === 'Breezy and Partly Cloudy') {
                                $("#oblacic").attr("src", "images/Breezy and Partly Cloudy.png");
                                $('#padavina').text('hladno i vedro');
                            } else if (pinData.summary === 'Humid') {
                                $("#oblacic").attr("src", "images/Humid.png");
                                $('#padavina').text('velika vlaznost');
                            }

                            $('#temp-br').text(pinData.temperature | 0);

                            var adresa = 'https://maps.googleapis.com/maps/api/streetview?size=400x250&location=' + pinData.x + ',' + pinData.y + '&heading=151.78&pitch=-0.76';
                            // console.log(adresa);
                            $('#streetview').attr("src", adresa);
                        });
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


