const firebaseConfig = {
  apiKey: "AIzaSyBpUZzgwlyE5CKVLS9BJ-1jVYLXjfd5HBg",
  authDomain: "prototipo-1da7e.firebaseapp.com",
  databaseURL: "https://prototipo-1da7e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "prototipo-1da7e",
  storageBucket: "prototipo-1da7e.appspot.com",
  messagingSenderId: "578612204118",
  appId: "1:578612204118:web:23b6d69843cd844fd3e1f7",
  measurementId: "G-ZK986DVP8L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var usuario;
function registrar() {
  var nombre = $("input#icon_prefix").val();
  var email = $("input#icon_email").val();
  var contraseña = $("input#contraseñaRegistrar").val();

  if ((nombre != "") && (contraseña.length > 4) && (email != "")) {
      firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(e => alert(e));
      authent();
  }
}

function authent(){
  let pathname = window.location.pathname;
  let findpath = pathname.search("/index.html");
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      location.href = 'dashboard/panel.html';
    }
    else if (findpath != -1) {
      location.href = 'registro.html';
    }
  })
}

function identificar() {
  var email = $("input#identificar").val();
  var contraseña = $("input#contraseña").val();
  firebase.auth().signInWithEmailAndPassword(email, contraseña).catch(e => alert(e))
  authent();
}

function singout() {
  firebase.auth().signOut().then(() => {
    alert('Sesión finalizada con exito.');
    location.href = 'index.html';
  }).catch(e => {
    alert(e);
  })
}

function mainsingout() {
  firebase.auth().signOut().then(() => {
    alert('Sesión finalizada con exito.');
    location.href = 'index.html';
  }).catch(e => {
    alert(e);
  })
}
$(document).ready(  
  function authent(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $(".mostrar").show();
        $(".showmenu").show();
        
      } else {
        $(".ocultarse").show();
        $(".showmenu").show();
      }
    })
  }
)