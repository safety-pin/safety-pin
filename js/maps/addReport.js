$(document).ready(function(){
    $('#prijaviForma').submit(function(e){
        console.log("Submit forme");
        e.preventDefault();
        var reportEmail = $("#reportEmail").val();
        var reportAddress = $("#reportAdress").val();
        var reportProblem = $("#reportProblem").val();
        var reportSolution = $("#reportSolution").val();
        var reportLat =  $("#reportLat").val();
        var reportLng = $("#reportLng").val();
        if (reportLat == null || reportLng == null || reportLat == "" || reportLng==""){
            $("reportAddress").addClass("label-border");
            return;
        }
        else {
            $("reportAddress").removeClass("label-border");
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
                $("#reportAdress").val("Odaberite adresu desnim klikom");
                $("#reportProblem").val("");
                $("#reportSolution").val("");
                $("#reportLat").val("");
                $("#reportLng").val("");

            },
            method: "POST",
            dataType: "json",
            processData: false,
            contentType: "application/json"
        });

        return false;

    });
});