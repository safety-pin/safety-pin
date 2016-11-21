$(document).ready(function(){
    $('#prijaviForma').submit(function(e){
        console.log("Submit forme");
        e.preventDefault();
        var reportEmail = $("#reportEmail").val();
        var reportAddress = $("#reportAddress");
        var reportProblem = $("#reportProblem").val();
        var reportSolution = $("#reportSolution").val();
        var reportLat =  $("#reportLat").val();
        var reportLng = $("#reportLng").val();
        if (reportLat == null || reportLng == null || reportLat == "" || reportLng==""){
            console.log("nema markera!");
            reportAddress.addClass("labelBorder");
            return;
        }
        else {
            reportAddress.removeClass("labelBorder");
        }
        var data = {
            email : String(reportEmail),
            latitude : parseFloat(reportLat),
            longitude : parseFloat(reportLng),
            problem : String(reportProblem),
            solution: String(reportSolution),
            status : false
        };
        data = JSON.stringify(data);
        console.log(data);
        $.ajax({
            url: config.ip + "reports/add",
            data: data,
            success: function (response) {
                console.log(response);
                $('#total').text(response.sum);
                $('#solved').text(response.solved);
                $("#reportEmail").val("");
                reportAddress.val("Odaberite adresu desnim klikom"); //ovo ne radi
                $("#reportProblem").val("");
                $("#reportSolution").val("");
                $("#reportLat").val("");
                $("#reportLng").val("");
                markers[0].setIcon('resources/images/50/green-pin1.png');
                regularMarkers.push(markers[0]);
                //markers[0].setMap(null);
                markers = [];
                $('#myModal').modal();

            },
            method: "POST",
            dataType: "json",
            processData: false,
            contentType: "application/json"
        });

        return false;

    });
});