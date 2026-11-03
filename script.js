// Reservas de canchas
const formularioReservas = document.querySelector(".reservas");
const listaReservasAdmin = document.getElementById("listaReservasAdmin");
const listaResultados = document.getElementById("listaResultados");
const reservasHechas = [];
const resultadosHechos = [];
const resultadosIniciales = listaResultados.innerHTML;
let reservasVisibles = false;

formularioReservas.addEventListener("submit", function(event) {
    event.preventDefault();

    let cancha = document.getElementById("cancha").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;

    if (cancha == "" || fecha == "" || hora == "") {
        alert("Rellene todos los campos");
    } else if (validarReserva(cancha, fecha, hora) == false) {
        alert("Esta cancha ya está reservada para esos datos");
    } else {
        reservasHechas.push({
            cancha: cancha,
            fecha: fecha,
            hora: hora
        });

        alert("Se realizó la reserva correctamente");
        formularioReservas.reset();
        refrescar();
    }
});

function validarReserva(cancha, fecha, hora) {
    for (let i = 0; i < reservasHechas.length; i++) {
        if (reservasHechas[i].cancha == cancha &&
            reservasHechas[i].fecha == fecha &&
            reservasHechas[i].hora == hora) {
            return false;
        }
    }

    return true;
}

// Registro de resultados
const formularioResultado = document.getElementById("formResultado");

formularioResultado.addEventListener("submit", function(event) {
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
    } else if (Number(marcador1) < 0 || Number(marcador2) < 0) {
        mensajeResultado.textContent = "Los goles no pueden ser negativos";
    } else {
        resultadosHechos.push({
            equipo1: equipo1,
            marcador1: marcador1,
            equipo2: equipo2,
            marcador2: marcador2,
            cancha: canchaResultado,
            fecha: fechaResultado
        });

        mensajeResultado.textContent = "Resultado registrado correctamente";
        formularioResultado.reset();
        refrescar();
    }
});

const botonMostrarReservas = document.getElementById("mostrarReservas");

botonMostrarReservas.addEventListener("click", function() {
    reservasVisibles = true;
    refrescar();
});

function mostrarResultados() {
    let contenidoResultados = resultadosIniciales;

    for (let i = 0; i < resultadosHechos.length; i++) {
        let resultado = resultadosHechos[i];

        contenidoResultados +=
            "<article class='resultado'>" +
            "<h3>Partido</h3>" +
            "<p>" + resultado.equipo1 + " " + resultado.marcador1 +
            " - " + resultado.marcador2 + " " + resultado.equipo2 + "</p>" +
            "<p>" + resultado.cancha + "</p>" +
            "<p>Fecha: " + resultado.fecha + "</p>" +
            "</article>";
    }

    listaResultados.innerHTML = contenidoResultados;
}

function mostrarReservas() {
    let contenidoReservas = "";

    if (reservasHechas.length == 0) {
        contenidoReservas = "<p>No hay reservas realizadas</p>";
    } else {
        for (let i = 0; i < reservasHechas.length; i++) {
            contenidoReservas +=
                "<p>Cancha: " + reservasHechas[i].cancha +
                " | Fecha: " + reservasHechas[i].fecha +
                " | Hora: " + reservasHechas[i].hora + "</p>";
        }
    }

    listaReservasAdmin.innerHTML = contenidoReservas;
}

function refrescar() {
    mostrarResultados();

    if (reservasVisibles == true) {
        mostrarReservas();
    }
}
