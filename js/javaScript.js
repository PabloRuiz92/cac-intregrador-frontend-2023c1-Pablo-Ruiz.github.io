let clickSubmit=document.getElementById("btnSubmit");

clickSubmit.addEventListener("click",()=>{
    document.getElementById("valorFinal").innerText = document.getElementById("cantidad").value;
});

clickScore1.addEventListener("click",()=>{
    document.getElementById("cantidad").innerText = document.getElementById("btnScore1").value;
});
