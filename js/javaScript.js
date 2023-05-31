let clickSubmit=document.getElementById("btnSubmit");
let clickReset=document.getElementById("btnReset");

clickSubmit.addEventListener("click",()=>{
    let ticket = 200;
    let cantidadTickets = document.getElementById("cantidadTickets").value;
    if (!isNaN(cantidadTickets) && cantidadTickets >= 1) {
        let porcentaje = document.getElementById("categoria").value;
        let ticketConDescuento = descuentoPorPorcentaje(ticket,porcentaje);
        document.getElementById("valorFinal").innerText = ticketConDescuento*cantidadTickets;
    } else {
        document.getElementById("advertencia").style.visibility="visible";
    }
});

clickReset.addEventListener("click",()=>{
    document.getElementById("valorFinal").innerText = "";
    document.getElementById("advertencia").style.visibility="hidden";
})

function descuentoPorPorcentaje(precioOriginal,porcentaje){
    let precioConDescuento = precioOriginal - ((porcentaje * precioOriginal)/100);
    return precioConDescuento;
}