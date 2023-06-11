let inteiro = document.querySelector('#inteiro');
let calculo = document.querySelector('#digitalizar');
let resultado = document.querySelector('#resultado');
let resultado1 = document.querySelector('#resultado1');
let resultado2 = document.querySelector('#resultado2');

function calcularTempo() {
    let I = Number(inteiro.value);
    let centena = Math.floor(I / 100);
    let dezena = Math.floor((I % 100) / 10);
    let unidade = I % 10;


    resultado.innerHTML=('Centena:' + ' ' + centena);
    resultado1.innerHTML=('Dezena:' + ' ' + dezena);
    resultado2.innerHTML=('Unidade:' + ' ' + unidade);
}

calculo.onclick = function() {
    calcularTempo();
}