$(document).ready(function() {
      $("textarea#textarea1").bind("keypress", function (e) {
          var keyCode = e.which ? e.which : e.keyCode
          if (!(keyCode >= 48 && keyCode <= 57)) {
            alert("Debes introducir números")
            return false;
          }
      });
    });

function muestra(){
	$("#incoming").load("https://jsonplaceholder.typicode.com/comments?postId="+$("textarea#textarea1").val()) 
}

