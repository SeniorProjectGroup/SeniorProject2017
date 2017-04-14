document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var watchID;
    $('#start').click(function(){
      watchID = navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true  });
      console.log("WatchID set to " + watchID);
    });
    $('#stop').click(function(){
      console.log("Trying to stop " + watchID);
      if(typeof watchID !== "undefined"){
        console.log("Success: stopping " + watchID);
        navigator.geolocation.clearWatch(watchID);
      };
    })

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
}