let latitude, longitude, destination;

$(document).ready(function(){
    alert("please allow the device to know your location")
    initGeolocation();
})



function initGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    }
    else{
        alert("sorry your browser does not support geolocation services.")
    }
}

function success(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude

    // Initializing Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 16
    });

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

    map.on('click', function (e) {
        destination=p.lngLat;
    });

    map.addControl(
        new MapboxGeocoder({
            accessToken:mapboxgl.accessToken,
            mapboxgl:mapboxgl
        }).on('result',function(e){
            destination= e.result.center
        })
    );
}

