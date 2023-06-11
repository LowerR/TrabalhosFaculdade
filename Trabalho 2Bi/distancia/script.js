let x1 = document.querySelector('#x1');
let y1 = document.querySelector('#y1');
let x2 = document.querySelector('#x2');
let y2 = document.querySelector('#y2');
let calcular = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');


function calcularDistancia () {
    let xA = Number(x1.value);
    let yA = Number(y1.value);
    let xB = Number(x2.value);
    let yB = Number(y2.value);
    var distancia = Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));

    resultado.innerHTML=(distancia);
}

calcular.onclick = function () {
    calcularDistancia();
}