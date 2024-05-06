let coordinates={}
$(document).ready(function(){
    get_coordinates();
})

function get_coordinates(){
    let searchParams=new URLSearchParams(window.location.search)
    if(searchParams.has('source') && searchParams.has('destination')){
        let source=searchParams.get('source')
        let destination=searchParams.get('destination')
        coordinates.source_lat=source.split(";")[0]
        coordinates.source_lon=source.split(";")[1]
        coordinates.destination_lat=source.split(";")[0]
        coordinates.destination_lon=source.split(";")[1]
    }
    else{
        alert("coordinates not selected.")
        window.history.back()
    }
}

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})

function render_elements() {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ef3a992b438d780917f06bf4418428a1}`,
        type:'get',
        success:function(response){
            let name = response.name
            let weather = response.weather[0].main
            $("#scene_container").append(
                <a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]};longitude: ${steps[i].maneuver.location[0]}">
                     <a-text height="50" value="Weather forcast is ${weather} at ${name})"></a-text>
                </a-entity>
            )
        }
    })
}