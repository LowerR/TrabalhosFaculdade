let tempo = document.querySelector('#tempo');
let calculo = document.querySelector('#digitalizar');
let resultado = document.querySelector('#resultado');
let resultado1 = document.querySelector('#resultado1');
let resultado2 = document.querySelector('#resultado2');

function calcularTempo() {
    let t = Number(tempo.value);
    let anos = Math.floor(t / 365);
    let meses = Math.floor((t % 365) / 30);
    let dias = Math.floor((t % 365) % 30);


    resultado.innerHTML=(anos + ' ' + 'Anos');
    resultado1.innerHTML=(meses+ ' ' + 'Meses');
    resultado2.innerHTML=(dias + ' ' + 'Dias');
}

calculo.onclick = function() {
    calcularTempo();
}