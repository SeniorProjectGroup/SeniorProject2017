/*document.addEventListener("deviceready", onDeviceReady, false);


var Latitude = 0;
var Longitude = 0;
var watchID;
var oldMarker;

function onDeviceReady() {
  getMapLocation();
  $('#start').click(function(){
    //watchID = navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true  });
    watchID = watchMapPosition();
  });
  $('#stop').click(function(){
    if(typeof watchID !== "undefined"){
      navigator.geolocation.clearWatch(watchID);
    };
  })
  
}

var onSuccess = function(position) {
  
  console.log('Latitude: '          + position.coords.latitude          + '\n' +
  'Longitude: '         + position.coords.longitude         + '\n' +
  'Altitude: '          + position.coords.altitude          + '\n' +
  'Accuracy: '          + position.coords.accuracy          + '\n' +
  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
  'Heading: '           + position.coords.heading           + '\n' +
  'Speed: '             + position.coords.speed             + '\n' +
  'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
  console.log('code: '    + error.code    + '\n' +
  'message: ' + error.message + '\n');
}

// Get geo coordinates

function getMapLocation() {
  
  navigator.geolocation.getCurrentPosition
  (onMapSuccess, onMapError, { enableHighAccuracy: true });
}

// Success callback for get geo coordinates

var onMapSuccess = function (position) {
  
  Latitude = position.coords.latitude;
  Longitude = position.coords.longitude;
  
  getMap(Latitude, Longitude);
  
}

function getMap(latitude, longitude) {
  
  var mapOptions = {
    center: new google.maps.LatLng(0, 0),
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  map = new google.maps.Map
  (document.getElementById("map"), mapOptions);
  
  
  var latLong = new google.maps.LatLng(latitude, longitude);
  
  var marker = new google.maps.Marker({
    position: latLong
  });

  oldMarker = marker;
  
  marker.setMap(map);
  map.setZoom(15);
  map.setCenter(marker.getPosition());
}

// Success callback for watching your changing position

var onMapWatchSuccess = function (position) {
  console.log('Latitude: '          + position.coords.latitude          + '\n' +
  'Longitude: '         + position.coords.longitude         + '\n' +
  'Altitude: '          + position.coords.altitude          + '\n' +
  'Accuracy: '          + position.coords.accuracy          + '\n' +
  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
  'Heading: '           + position.coords.heading           + '\n' +
  'Speed: '             + position.coords.speed             + '\n' +
  'Timestamp: '         + position.timestamp                + '\n');
  
  var updatedLatitude = position.coords.latitude;
  var updatedLongitude = position.coords.longitude;
  
  if (updatedLatitude != Latitude && updatedLongitude != Longitude) {
    
    Latitude = updatedLatitude;
    Longitude = updatedLongitude;
    oldMarker.setMap(null);
    oldMarker = null;
    var latLong = new google.maps.LatLng(Latitude, Longitude);
    
    var marker = new google.maps.Marker({
      position: latLong
    });
    oldMarker = marker;
    marker.setMap(map);
    map.setCenter(marker.getPosition());
  }
}

// Error callback

function onMapError(error) {
  console.log('code: ' + error.code + '\n' +
  'message: ' + error.message + '\n');
}

// Watch your changing position

function watchMapPosition() {

  return navigator.geolocation.watchPosition
  (onMapWatchSuccess, onMapError, { enableHighAccuracy: true });

}*/