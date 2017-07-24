
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
var numAsientos ;
function redirect(event){
	numAsientos = event.target.textContent;
    document.getElementById("mostrar").innerHTML = "<br>"+"<strong>"+"Asiento n° : "+"</strong>" +(event.target.textContent);
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
    //    var asiento=(event.target.textContent);
    //var mostrar=document.getElementById("mostrar");
    //mostrar.innerHTML=asiento;

	var asiento = parseInt(numAsientos);
    var obj = asientos[asiento - 1];

    //console.log (obj.nombre);

}

   var N = 32; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
  }

function reservar(){
	var asiento = parseInt(numAsientos);
	var nombre = document.getElementById("name").value;
	var address= document.getElementById("address").value;
	var dni = document.getElementById("dni").value;
	document.getElementById("mostrarNombre").innerHTML="<strong>Nombre del pasajero: </strong>"+nombre+" "+address+
				"<br> <strong>Número de DNI : </strong>"+dni + 
				"<br><strong>Asiento Reservado : </strong>"+asiento + "<br>";
	asientos[asiento - 1]={
		nombre:nombre,
		apellido:address,
		dni:dni
	}
	//console.log(asientos);
}

function listar(){
	html="<table>";
	for(var i=0; i<=asientos.length; i++){
		if(asientos[i]!= undefined){
			html+="<tr><td>"+asientos[i].nombre+"</td>"+
					"<td>"+asientos[i].apellido+"</td></tr>";
		}
	}
	html+="</table>";
	document.getElementById("listar").innerHTML=html;
}

function buscar(){
	var buscar = document.getElementById("buscar");
	var dni = document.getElementById("buscarDni").value;

	for(var i in asientos){
		 if(asientos[i] != undefined && asientos[i].dni==dni){          
		 var asiento = parseInt(i)+1;          
		 var nombreBuscado =asientos[i].nombre;          
		 var apellidoBuscado=asientos[i].apellido; 
		 var dniBuscado=asientos[i].dni;       
		document.getElementById("pasajeroBuscado").innerHTML= "<strong>Pasajero: </strong>"+ nombreBuscado+" "+apellidoBuscado +"<br>"+
															"<strong>Número de DNI: </strong>"+ dniBuscado+"<br>"
															 +"<strong>Asiento número : </strong>" + asiento;
	}
}
}