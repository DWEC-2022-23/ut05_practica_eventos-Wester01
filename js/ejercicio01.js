let numero = document.querySelector("#numero");

numero.addEventListener('mouseover',()=>{
   
    numero.style = "background:lightblue;";
});
numero.addEventListener('mouseout', ()=>{
    numero.style.background = "white";
});

numero.addEventListener('dblclick', ()=>{
    var par = document.querySelector("#numero");
    var nTriple = par.innerHTML * 3;
    par.innerHTML = nTriple;
});
