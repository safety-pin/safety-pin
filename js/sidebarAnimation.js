/**
 * Created by Branislav Vidojevic on 10/12/2015.
 */
$('#trig').on('click', function () {
    $('#map-section').toggleClass('col-md-9 col-md-12');
    $('#sidebar-info').toggleClass('col-md-3 col-md-0');
    google.maps.event.trigger(map, 'resize');
});