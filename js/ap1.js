






function initMap() {
    var msp = {lat: 44.8848, lng: -93.2223};
    var ord = {lat: 41.9742, lng: -87.9073};
    var mke = {lat: 42.9476, lng: -87.8966};
    var msn = {lat: 43.1391, lng: -89.3364};


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: msp
    });

    var marker = new google.maps.Marker({
        position: msp,
        map: map
    });

    var marker = new google.maps.Marker({
        position: ord,
        map: map
    });

    var marker = new google.maps.Marker({
        position: mke,
        map: map
    });

    var marker = new google.maps.Marker({
        position: msn,
        map: map
    });
}