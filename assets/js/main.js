

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

    console.log (obj.nombre);
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
	var mostrarReserva = document.getElementById("mostrarNombre").innerHTML="<strong>"+"Nombre del pasajero: "+"</strong>"+nombre+" "+address+"<br>"+"<strong>"+"Número de DNI : "+"</strong>"+dni + "<br>" +"<strong>"+ "Asiento Reservado : "+"</strong>"+asiento + "<br>";
	asientos[asiento - 1]={
		nombre:nombre,
		apellido:address,
		dni:dni
	}
	console.log(asientos);
}
reservar();



