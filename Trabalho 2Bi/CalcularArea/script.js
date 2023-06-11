let raio = document.querySelector('#raio');
let calculo = document.querySelector('#digitalizar');
let resultado = document.querySelector('#resultado');


function calcularArea() {
    let R = Number(raio.value);
    let conta = Math.PI * Math.pow(R, 2);
    let area = conta.toFixed(2)

    resultado.innerHTML=('Area da Pizza Igual a:' + ' ' + area + 'cm²' );
}

calculo.onclick = function() {
    calcularArea();
}