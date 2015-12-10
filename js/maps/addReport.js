$(document).ready(function(){
    $('#prijaviForma').submit(function(e){
        e.preventDefault();
        var reportEmail = $("#reportEmail").val();
        var reportAddress = $("#reportAdress").val();
        var reportProblem = $("#reportProblem").val();
        var reportSolution = $().val("reportSolution");
        var data = {
            email : reportEmail,
            latitude : '',
            longitude : '',
            problem : reportProblem,
            solution: reportSolution,
            status : false
        };
        $.ajax({
            url: config.ip + "posts/add",
            data: allPaths,
            success: function (response) {
                var brMat = 0;
                var brPov = 0;
                var brSmr = 0;

                // console.log(JSON.stringify(response));

                $('#routeDistance').text(distance);
                $('#routeDistance1').text("Distanca");
                $('#route1').text(brMat);
                $('#route2').text(brPov);
                $('#route3').text(brSmr);
                $('#location').val(address.start_address);
                $('#cilj').val(address.end_address);
            },
            method: "POST",
            dataType: "json",
            processData: false,
            contentType: "application/json"
        });

        return false;

    });
});