$(document).ready(function(){

  var database = firebase.database();
  var user;
  var Speed;

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

        user = firebase.auth().currentUser.uid;
        if(typeof position.coords.speed === "undefined"){
          Speed = 0;
        }
        else{
          Speed = position.coords.speed;
        }
        database.ref(user + "/Timestamp/"+ position.timestamp).update({"Latitude":position.coords.latitude,
         "Longitude":position.coords.longitude, "Speed":Speed});
  };
  // onError Callback receives a PositionError object
  //
  function onError(error) {
    console.log('code: '    + error.code    + '\n' +
    'message: ' + error.message + '\n');
  }
})
