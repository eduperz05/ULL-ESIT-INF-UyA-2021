authent();
  function authent(){
    let pathname = window.location.pathname;
    let findpath = pathname.search("../index.html");
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
		    $('#alumno').text(user.email)
      } else {
       window.location.replace("../index.html");
      }
    })
  }

