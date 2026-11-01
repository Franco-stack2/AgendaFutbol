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