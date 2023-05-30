let clickSubmit=document.getElementById("btnSubmit");

clickSubmit.addEventListener("click",()=>{
    let ticket = 200;
    let cantidadTickets = document.getElementById("cantidadTickets").value;
    let porcentaje = document.getElementById("categoria").value;
    let ticketConDescuento = ticket - ((porcentaje * ticket)/100);
    document.getElementById("valorFinal").innerText = ticketConDescuento*cantidadTickets;
});