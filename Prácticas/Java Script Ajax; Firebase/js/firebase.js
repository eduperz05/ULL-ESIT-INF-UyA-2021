
    var firebaseConfig = {
      apiKey: "AIzaSyAz0uz82w_FkAe3dw0cf9cuyPiWo5WlGoo",
      authDomain: "uyaprueba.firebaseapp.com",
      databaseURL: "https://uyaprueba-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "uyaprueba",
      storageBucket: "uyaprueba.appspot.com",
      messagingSenderId: "194743259952",
      appId: "1:194743259952:web:6dd340dc7352402dee6ef5",
      measurementId: "G-H0HTDX800Z"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    //Referencia a la base de datos
    var database = firebase.database();
    var i = 1

    function cargar(){
      var indice = "alumno" + i
      var referencia = database.ref(indice);
      referencia.set({
        nombre: $("textarea#textarea2").val()
      });
      i = i + 1
      mostrarvalores()
    }

    function actualizar(){
      var referencia = database.ref('alumno');
      referencia.update({
        edad: $("textarea#textarea3").val()
      });
      mostrarvalores()
    }
    
    function mostrarvalores(){
      referencia = database.ref('/');
        referencia.once('value', snapshot => {
          console.log(snapshot.val());
        });
    }
