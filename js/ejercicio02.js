function muestraOculta(element){
	

	switch(element.id){
		case "enlace_1":
			var parrafo = document.querySelector("#contenidos_1");
			if(parrafo.style.display == "none"){
				parrafo.style.display = "block";
				element.innerHTML = "Ocultar contenidos";
			}else{
				parrafo.style.display = "none";
				element.innerHTML = "Mostrar contenidos";
			}
			break;
		case "enlace_2":
			var parrafo = document.querySelector("#contenidos_2");
			if(parrafo.style.display == "none"){
				parrafo.style.display = "block";
				element.innerHTML = "Ocultar contenidos";
			}else{
				parrafo.style.display = "none";
				element.innerHTML = "Mostrar contenidos";
			}
			break;
		case "enlace_3":
			var parrafo = document.querySelector("#contenidos_3");
			if(parrafo.style.display == "none"){
				parrafo.style.display = "block";
				element.innerHTML = "Ocultar contenidos";
			}else{
				parrafo.style.display = "none";
				element.innerHTML = "Mostrar contenidos";
			}
			break;
	}

}


let enlace_1 = document.querySelector("#enlace_1");
enlace_1.addEventListener('click',() => {
	
	muestraOculta(enlace_1);

});
let enlace_2 = document.querySelector("#enlace_2");

enlace_2.addEventListener('click',() => {
	
	muestraOculta(enlace_2);

});
let enlace_3 = document.querySelector("#enlace_3");
enlace_3.addEventListener('click',() => {
	
	muestraOculta(enlace_3);

});
