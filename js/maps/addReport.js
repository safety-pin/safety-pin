$(document).ready(function(){
    $('#prijaviForma').submit(function(e){
        console.log("JEBACE VAS SLOBA");
        e.preventDefault();
        var reportEmail = $("#reportEmail").val();
        var reportAddress = $("#reportAdress").val();
        var reportProblem = $("#reportProblem").val();
        var reportSolution = $().val("reportSolution");
        var reportLat =  $("#reportLat").val();
        var reportLng = $("#reportLng").val();
        var data = {
            email : String(reportEmail),
            latitude : parseFloat(reportLat),
            longitude : parseFloat(reportLng),
            problem : String(reportProblem),
            solution: String(reportSolution),
            status : false
        };
        data = JSON.stringify(data);
        $.ajax({
            url: config.ip + "reports/add",
            data: data,
            success: function (response) {
                console.log(response);
                $('#total').text(response.sum);
                $('#solved').text(response.solved);

            },
            method: "POST",
            dataType: "json",
            processData: false,
            contentType: "application/json"
        });

        return false;

    });
});