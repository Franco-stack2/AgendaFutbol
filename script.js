const fromreservas=document.getElementById("reservas");
fromreservas.addEventListener("submit",function(event){
    event.preventDefault()
let cancha=document.getElementById("cancha").value;
let fecha=document.getElementById("fecha").value;
let hora=document.getElementById("hora").value;
 if (cancha == "" || fecha == "" || hora == "") {
        alert("Rellene todo los campos");
    } else if(validarReservas(cancha,fecha,hora)==false){
        alert("Esta cancha ya está reservada para esos datos")
    } else {
        reservashechas.push({
             cancha: cancha,
            fecha: fecha,
            hora: hora
        })
        alert("se relleno correctamente");
        fromreservas.reset()
    }
})
let reservashechas=[];
function validarReservas(cancha,fecha,hora){
    for (let i = 0; i < reservashechas.length; i++){
        if(reservashechas[i].cancha==cancha && reservashechas[i].fecha==fecha && 
            reservashechas[i].hora==hora ){
                return false;
            }
    }
    return true;
}

// Modulo 3 - Resultados y Administracion

const formResultado = document.getElementById("formResultado");

formResultado.addEventListener("submit", function(event) {

    event.preventDefault();

    let equipo1 = document.getElementById("equipo1").value.trim();
    let marcador1 = document.getElementById("marcador1").value;
    let equipo2 = document.getElementById("equipo2").value.trim();
    let marcador2 = document.getElementById("marcador2").value;
    let canchaResultado = document.getElementById("canchaResultado").value;
    let fechaResultado = document.getElementById("fechaResultado").value;

    let mensajeResultado = document.getElementById("mensajeResultado");

   if (equipo1 == "" || marcador1 == "" || equipo2 == "" ||
    marcador2 == "" || canchaResultado == "" || fechaResultado == "") {

    mensajeResultado.textContent = "Debe completar todos los campos";

} else if (marcador1 < 0 || marcador2 < 0) {

    mensajeResultado.textContent = "Los goles no pueden ser negativos";

} else {

        let listaResultados = document.getElementById("listaResultados");

        let nuevoResultado = document.createElement("article");

        nuevoResultado.className = "resultado";

        nuevoResultado.innerHTML =
            "<h3>Partido</h3>" +
            "<p>" + equipo1 + " " + marcador1 +
            " - " + marcador2 + " " + equipo2 + "</p>" +
            "<p>" + canchaResultado + "</p>" +
            "<p>Fecha: " + fechaResultado + "</p>";

        listaResultados.appendChild(nuevoResultado);

        mensajeResultado.textContent = "Resultado registrado correctamente";

        formResultado.reset();
    }

});

const mostrarReservas = document.getElementById("mostrarReservas");

mostrarReservas.addEventListener("click", function() {

    let listaReservasAdmin = document.getElementById("listaReservasAdmin");

    listaReservasAdmin.innerHTML = "";

    if (reservashechas.length == 0) {

        listaReservasAdmin.innerHTML =
            "<p>No hay reservas realizadas</p>";

    } else {

        for (let i = 0; i < reservashechas.length; i++) {

            let reserva = document.createElement("p");

            reserva.textContent =
                "Cancha: " + reservashechas[i].cancha +
                " | Fecha: " + reservashechas[i].fecha +
                " | Hora: " + reservashechas[i].hora;

            listaReservasAdmin.appendChild(reserva);
        }

    }

});