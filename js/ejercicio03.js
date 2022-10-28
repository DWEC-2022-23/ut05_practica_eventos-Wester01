document.addEventListener('mousemove',mousePossition);
document.addEventListener('click',mouseClick);
document.addEventListener('keydown', keyPressed);

let coords = document.querySelector(".coords");
let coordsClick = document.querySelector(".coordsClick");
let keyChar = document.querySelector(".keyChar");

function mousePossition(e) {
  coords.innerText = 'Pantalla X/Y:' + e.screenX + ", "  + e.screenY + "\n Cliente: " + e.clientX + "," + e.clientY + "\n Pagina: " + e.pageX + "," + e.pageY;
}
function mouseClick(e) {
  coordsClick.innerText = 'Pantalla X/Y:' + e.screenX + ", "  + e.screenY + "\n Cliente: " + e.clientX + "," + e.clientY + "\n Pagina: " + e.pageX + "," + e.pageY;
}
function keyPressed(e){
	keyChar.innerText = 'Tecla:' + e.key + " Code:" + e.code;
}
