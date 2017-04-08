

$(document).ready(function(){

  var database = firebase.database();

  $('#start').click(function(){navigator.geolocation.watchPosition(onSuccess, onError)});

    var onSuccess = function(position) {
        console.log('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');


              var Trip = database.ref(position.timestamp);
              database.ref(position.timestamp).set({"Latitude":position.coords.latitude, "Longitude":position.coords.longitude, "Timestamp":position.timestamp});
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        console.log('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
})
