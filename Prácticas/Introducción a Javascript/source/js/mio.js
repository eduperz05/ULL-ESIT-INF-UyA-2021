
 function muestra(){
	  $("#salida span").text($("textarea#textarea1").val());
	///  $("#texto").show();
	 // $("#mostrar").hide();
	 // $("#ocultar").show();
	  
 }
 function ocultar(){
	  $("#texto").hide();
	  $("#mostrar").show();
	  $("#ocultar").hide();
	  
 }
 // En json separados
 
 //var maria = {"dni": "02302823V", "anonacimiento": 2000, "fechaingreso": 2020, "plusproductividad": 5, "plusantiguedad": 0, "sueldobase": 1800};
 //var isabel = {"dni": "09217640E", "anonacimiento": 1990, "fechaingreso": 2010, "plusproductividad": 3, "plusantiguedad": 0.3, "sueldobase": 2100};
 //var pedro = {"dni": "04863590B", "anonacimiento": 1980, "fechaingreso": 2005, "plusproductividad": 9, "plusantiguedad": 0.4, "sueldobase": 1550};
 //var miguel = {"dni": "06028709H", "anonacimiento": 1974, "fechaingreso": 2001, "plusproductividad": 7, "plusantiguedad": 0.6, "sueldobase": 1600};

 // En una array de JSON
  var empleados = [{"dni": "02302823V", "anonacimiento": 2000, "fechaingreso": 2020, "plusproductividad": 5, "plusantiguedad": 0, "sueldobase": 1800},{"dni": "09217640E", "anonacimiento": 1990, "fechaingreso": 2010, "plusproductividad": 3, "plusantiguedad": 0.3, "sueldobase": 2100},{"dni": "04863590B", "anonacimiento": 1980, "fechaingreso": 2005, "plusproductividad": 9, "plusantiguedad": 0.4, "sueldobase": 1550},{"dni": "06028709H", "anonacimiento": 1974, "fechaingreso": 2001, "plusproductividad": 7, "plusantiguedad": 0.6, "sueldobase": 1600}];

 function calcular(){
	 
//	 $("#edadmaria").html(2021-maria.anonacimiento);
	 $("#edadmaria").html(2021-empleados[0].anonacimiento);
	 
//	 $("#edadisabel").html(2021-isabel.anonacimiento);
	 $("#edadisabel").html(2021-empleados[1].anonacimiento);
	 
//	 $("#edadpedro").html(2021-pedro.anonacimiento);
	 $("#edadpedro").html(2021-empleados[2].anonacimiento);
	 
//	 $("#edadmiguel").html(2021-miguel.anonacimiento);
	 $("#edadmiguel").html(2021-empleados[3].anonacimiento);
	 
//	 $("#sueldomaria").html((maria.sueldobase*maria.plusproductividad/100)+(maria.sueldobase*maria.plusantiguedad)+maria.sueldobase);
	 $("#sueldomaria").html((empleados[0].sueldobase*empleados[0].plusproductividad/100)+(empleados[0].sueldobase*empleados[0].plusantiguedad)+empleados[0].sueldobase);

//	 $("#sueldoisabel").html((isabel.sueldobase*isabel.plusproductividad/100)+(isabel.sueldobase*isabel.plusantiguedad/100)+isabel.sueldobase);
	 $("#sueldoisabel").html((empleados[1].sueldobase*empleados[1].plusproductividad/100)+(empleados[1].sueldobase*empleados[1].plusantiguedad/100)+empleados[1].sueldobase);
	 
//	 $("#sueldopedro").html((pedro.sueldobase*pedro.plusproductividad/100)+(pedro.sueldobase*pedro.plusantiguedad/100)+pedro.sueldobase);
	 $("#sueldopedro").html((empleados[2].sueldobase*empleados[2].plusproductividad/100)+(empleados[2].sueldobase*empleados[2].plusantiguedad/100)+empleados[2].sueldobase);
	 
//	 $("#sueldomiguel").html((miguel.sueldobase*miguel.plusproductividad/100)+(miguel.sueldobase*miguel.plusantiguedad/100)+miguel.sueldobase);
	 $("#sueldomiguel").html((empleados[3].sueldobase*empleados[3].plusproductividad/100)+(empleados[3].sueldobase*empleados[3].plusantiguedad/100)+empleados[3].sueldobase);
	 
	 
	 $(".datos").show();
 }
 function contar(){
	var n = 0;
	$('p').each(
	function(){
	n=n+1;
	})
	var j = 0;
	$('a').each(
	function(){
	j=j+1;
	})
	var i = 0;
	$('div').each(
	function(){
	i=i+1;
	})
	$("#parra").html(n);
	$("#enla").html(j);
	$("#divs").html(i);
	$("#conta").show();
}
