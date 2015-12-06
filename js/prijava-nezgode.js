
// $('#prijaviForma').submit(false);
$(document).ready(function(){
	$('#prijaviForma').submit(function(){

		// var email;
		// var adresa;
		// var problem;
		// var resenje;
		// var lat;
		// var lng;
		// var json;
		// 	email = (document.getElementById('mail').value);

		// 	adresa = (document.getElementById('adr').value);

		// 	problem = (document.getElementById('problem').value);

		// 	resenje = (document.getElementById('resenje').value);


		// $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+adresa+",Belgrade", function(data) {
		// 		lat = data.results[0].geometry.location.lat;
		// 		lng = data.results[0].geometry.location.lng;

		// 		alert('uspeh za google!');
		// });

		// json = {"email":email, "latitude":lat, "longitude":lng, "problem":problem, "solution": resenje, "status" : false};
		// json = JSON.stringify(json);
		// $.ajax({
		// 		type: 'POST',
		// 		url: 'http://10.120.192.2:8081/open-data/api/reports/add',
		// 		data: json,
		// 		success: function(data) {
		// 			data = JSON.stringify(data); 
		// 			data = JSON.parse(data);
		// 			$("#solved").text(data.solved);
		// 			$("#total").text(data.sum);
		// 		},
		// 		contentType: "application/json",
		// 		dataType: 'json'
		// });

		$("#total").text(int($("#total").text(i))+1);

		return false;

	});
	
});
