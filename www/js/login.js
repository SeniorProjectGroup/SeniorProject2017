$(document).ready(function(){

  var auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();

  auth.$onAuth(function(authData) {
  if (authData !== null) {
    console.log("Authenticated successfully with payload:", authData);
  } else {
    // Try to authenticate with Google via OAuth redirection
    auth.authWithOAuthRedirect("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      }
    });
  }
})

})
