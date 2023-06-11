let total = document.querySelector('#total');
let calculo = document.querySelector('#digitalizar');
let resultado = document.querySelector('#resultado');
let resultado2 = document.querySelector('#resultado1');
let resultado3 = document.querySelector('#resultado2');


function calcularArea() {
    let T = Number(total.value);
    let semCentavos = Math.floor(T / 3);

    let carlos = semCentavos;
    let andre = semCentavos;
    let felipe = T / 3 ;
    let c = carlos.toFixed(2);
    let a = andre.toFixed(2);
    let f = felipe.toFixed(2);

    resultado.innerHTML=('Carlos' + ' ' + c);
    resultado2.innerHTML=('André' + ' ' + a);
    resultado3.innerHTML=('Felipe' + ' ' + f);
}

calculo.onclick = function() {
    calcularArea();
}