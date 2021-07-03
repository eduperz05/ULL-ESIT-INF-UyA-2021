(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  });
})(jQuery); // end of jQuery name space

//Sombreado del mapa web
function uno(src,color_entrada) {
  src.bgColor = color_entrada;
  src.style.cursor = "hand";
} 

function dos(src,color_entrada) {
  src.bgColor = color_entrada;
  src.style.cursor = "hand";
}

//Foco botón comenzar
$("#button-comenzar").focus(function() {
  $("#button-comenzar").removeClass("deep-orange");
  $("#button-comenzar").removeClass("darken-4");
  $("#button-comenzar").last().addClass("deep-orange");
  $("#button-comenzar").last().addClass(" lighten-3");
});
$("#button-comenzar").focusout(function() {
  $("#button-comenzar").removeClass("deep-orange");
  $("#button-comenzar").removeClass("lighten-3");
  $("#button-comenzar").last().addClass("deep-orange");
  $("#button-comenzar").last().addClass("darken-4");
});

// Enter Para formularios de registro/inicio de sesión
$('#contraseña').on('input', function() {
  $('#contraseña').keyup(function(e){
    if(e.keyCode == 13){
        //entered is clicked
        identificar();
    }
  });
});

$('#contraseñaRegistrar').on('input', function() {
  $('#contraseñaRegistrar').keyup(function(e){
    if(e.keyCode == 13){
        //entered is clicked
        registrar();
    }
  });
});