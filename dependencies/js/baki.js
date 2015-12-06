function parseMapsJson(data){
	data = JSON.stringify(data);
	data = JSON.parse(data);
	var bounds = data.routes[0].bounds;
	var distance = data.routes[0].legs[0].distance.text;
	var steps = data.routes[0].legs[0].steps;
	adress = {
		start_adress : data.routes[0].legs[0].start_address,
		end_adress: data.routes[0].legs[0].end_address
	}
	JSON.stringify(adress);
	// console.log(adress.start_adress);


	var steps = data.routes[0].legs[0].steps;
	var allPaths = [];

	for (i = 0; i < steps.length; i++) {
		var current = steps[i].path;
		allPaths = allPaths.concat(current);

	}
	// console.log(JSON.stringify(allPaths));
	// var postData = {
	// 	bounds : bounds,
	// 	distance: distance,
	// 	steps: steps,
	// 	adress: adress
	// }


	allPaths = JSON.stringify(allPaths);
	// console.log(allPaths);
	// allPaths = JSON.parse(allPaths);
	if (typeof routeMarkers != "undefined" && routeMarkers!=[]){
		for (i = 0; i< routeMarkers.length; i++ ){
			routeMarkers[i].setMap(null);
		}
	}

	routeMarkers = [];
	$.ajax({
		url: "http://localhost:8081/open-data/api/path",
		data: allPaths,
		success: function(response){
			var brMat = 0;
			var brPov = 0;
			var brSmr = 0;

			// console.log(JSON.stringify(response));
			response.forEach(function(currentValue){
				var icon = "";
				if(currentValue.type==1){
					brMat++;
					icon = 'images/50/blue-pin1.png';
				} else if (currentValue.type==2){
					brPov++;
					icon = 'images/50/red-pin1.png';
				}else {
					brSmr++;
					icon = 'images/50/black-pin1.png';
				}
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(currentValue.x,currentValue.y),
					map: map,
					title: String(currentValue.id),
					icon: icon
				});
				routeMarkers.push(marker);
			});
			$('#routeDistance').text(distance);
			$('#routeDistance1').text("Distanca");
			$('#route1').text(brMat);
			$('#route2').text(brPov);
			$('#route3').text(brSmr);
			$('#location').val(adress.start_adress);
			$('#cilj').val(adress.end_adress);
		},
		method: "POST",
		dataType: "json",
		processData: false,
		contentType: "application/json"
	});

	// for (i = 0; i < allPaths.length; i=i+1) {
	// 	$.get("http://10.120.192.2:8081/open-data/api/path",  function(json) {
	// 		console.log(i);
	// 		json.forEach(function(currentValue){

	// 			var marker = new google.maps.Marker({
	// 				position: new google.maps.LatLng(currentValue.x,currentValue.y),
	// 				map: map,
	// 				title: String(currentValue.id)
	// 			});
	// 		});

	// 	});
	// 	// console.log("emilie");
 //  // 		  var marker = new google.maps.Marker({
	//  //    position: new google.maps.LatLng(allPaths[i].lat,allPaths[i].lng),
	//  //    map: map
	//  //  });

	// }

}

	// paths.forEach(function(currentValue){
 //  		var marker = new google.maps.Marker({
	//     position: new google.maps.LatLng(currentValue.lat,currentValue.lng),
	//     map: map
	//   });
 //  	});

		// $.post("http://10.120.194.78:8081/open-data/api/", postData,
		// 	function(pins){
		// 	//poslao sam bakiju legove, rute, distance i sl
		// 	//ocekujem pinove koje cu da prikazem
		// });
// }
