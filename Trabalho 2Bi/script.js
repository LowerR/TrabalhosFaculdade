let dimencaoX = document.querySelector('#dimencaoX');
let dimencaoY = document.querySelector('#dimencaoY');
let digitalizar = document.querySelector('#digitalizar');
let resultado = document.querySelector('#resultado');


function calcularArea () {
    let X = Number(dimencaoX.value)
    let Y = Number(dimencaoY.value)
    
    resultado.innerHTML=(X * Y + 'm²')

} 

digitalizar.onclick = function () {
    calcularArea();
}