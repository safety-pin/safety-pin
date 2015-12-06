var email;
var adresa;
var problem;
var resenje;
var lat;
var lng;
var json;


$("#prijaviForma").submit(function(){

		email = (document.getElementById('mail').value);

		adresa = (document.getElementById('adr').value);

		problem = (document.getElementById('problem').value);

		resenje = (document.getElementById('resenje').value);


	$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+adresa+",Belgrade", function(data) {
			lat = data.results[0].geometry.location.lat;
			lng = data.results[0].geometry.location.lng;
	});

	json = {"email":email, "latitude":lat, "longitude":lng, "problem":problem, "solution": resenje, "status" : false};

	$.post({
			type: 'POST',
			url: 'http://10.120.192.2:8081/open-data/api/reports/add',
			data: JSON.stringify(json),
			success: function(data) { alert(data) },
			contentType: "application/json",
			dataType: 'json'
	});



});
