(function(window, google) {

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

    map = new google.maps.Map(element, options);

    function clusterOptions(image) {
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

    var marker1 = new MarkerClusterer(map, [], clusterOptions('resources/images/50/blue-cluster.png'));
    var marker2 = new MarkerClusterer(map, [], clusterOptions('resources/images/50/red-cluster.png'));
    var marker3 = new MarkerClusterer(map, [], clusterOptions('resources/images/50/black-cluster.png'));

    $.getJSON(config.ip + "accidents/all",
        function(json) {
            json.forEach(function(currentValue) {

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(currentValue.x, currentValue.y),
                    title: String(currentValue.id)
                });

                marker.addListener('click', function() {
                    //map.setCenter(marker.getPosition());
                    // var value = "" + currentValue.dayOfWeek + currentValue.temperature + currentValue.precipitation + currentValue.summary + currentValue.type + currentValue.date + currentValue.id;
                    //console.log(value);
                    // infoWindow.setContent(value);
                    // infoWindow.open(map, marker);

                    $.getJSON(config.ip + "accidents/" + currentValue.id,
                        function(pinData) {
                            var time = pinData.date;
                            var timeTrim = time.substring(11, 16);
                            var dateTrim = time.substring(0, 10);
                            $('#dayOfWeek').text(pinData.dayOfWeek);
                            $('#time').text(timeTrim);
                            $('#date1').text(dateTrim);
                            if (pinData.type === 1) {
                                $("#tip-nezgode").attr("src", "resources/images/Safty-PIN-icon-set-26.png");
                                $('#tip-nesrece').text('Materijalna steta');
                            } else if (pinData.type === 2) {
                                $("#tip-nezgode").attr("src", "resources/images/povrede.png");
                                $('#tip-nesrece').text('Sa povredama');
                            } else if (pinData.type === 3) {
                                $("#tip-nezgode").attr("src", "resources/images/smrt.png");
                                $('#tip-nesrece').text('Smrtni ishod');
                            }

                            if (pinData.summary === 'Clear') {
                                $("#oblacic").attr("src", "resources/images/Clear.png");
                                $('#padavina').text('sunčano');
                            } else if (pinData.summary === 'Breezy and Mostly Cloudy') {
                                $("#oblacic").attr("src", "resources/images/Breezy and Mostly Cloudy.png");
                                $('#padavina').text('hladno i oblačno');
                            } else if (pinData.summary === 'Partly Cloudy') {
                                $("#oblacic").attr("src", "resources/images/Partly Cloudy.png");
                                $('#padavina').text('mestimično oblačno');
                            } else if (pinData.summary === 'Mostly Cloudy') {
                                $("#oblacic").attr("src", "resources/images/Mostly Cloudy.png");
                                $('#padavina').text('pretežno oblačno');
                            } else if (pinData.summary === 'Overcast') {
                                $("#oblacic").attr("src", "resources/images/Overcast.png");
                                $('#padavina').text('oblačno');
                            } else if (pinData.summary === 'unknown') {
                                $("#oblacic").attr("src", "resources/images/unknown.png");
                                $('#padavina').text('nepoznato');
                            } else if (pinData.summary === 'Foggy') {
                                $("#oblacic").attr("src", "resources/images/Foggy.png");
                                $('#padavina').text('maglovito');
                            } else if (pinData.summary === 'Breezy') {
                                $("#oblacic").attr("src", "resources/images/Breezy.png");
                                $('#padavina').text('prohladno');
                            } else if (pinData.summary === 'Breezy and Overcast') {
                                $("#oblacic").attr("src", "resources/images/Breezy and Overcast.png");
                                $('#padavina').text('prohladno i oblačno');
                            } else if (pinData.summary === 'Dry and Partly Cloudy') {
                                $("#oblacic").attr("src", "resources/images/Dry and Partly Cloudy.png");
                                $('#padavina').text('suvo i oblačno');
                            } else if (pinData.summary === 'Windy and Mostly Cloudy') {
                                $("#oblacic").attr("src", "resources/images/Windy and Mostly Cloudy.png");
                                $('#padavina').text('vetrovito i oblačno');
                            } else if (pinData.summary === 'Breezy and Partly Cloudy') {
                                $("#oblacic").attr("src", "resources/images/Breezy and Partly Cloudy.png");
                                $('#padavina').text('hladno i vedro');
                            } else if (pinData.summary === 'Humid') {
                                $("#oblacic").attr("src", "resources/images/Humid.png");
                                $('#padavina').text('velika vlažnost');
                            }

                            $('#temp-br').text(pinData.temperature | 0);

                            var adresa = 'https://maps.googleapis.com/maps/api/streetview?size=400x250&location=' + pinData.x + ',' + pinData.y + '&heading=151.78&pitch=-0.76';
                            // console.log(adresa);
                            $('#streetview').attr("src", adresa);
                        });
                });
                if (currentValue.type == 1) {
                    marker1.addMarker(marker);
                    marker.setIcon('resources/images/50/blue-pin1.png');
                } else if (currentValue.type == 2) {
                    marker2.addMarker(marker);
                    marker.setIcon('resources/images/50/red-pin1.png');
                } else {
                    marker3.addMarker(marker);
                    marker.setIcon('resources/images/50/black-pin1.png');
                }
            });

        });
} (window, google));


