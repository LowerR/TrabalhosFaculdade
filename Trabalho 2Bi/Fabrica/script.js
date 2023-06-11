let pequena = document.querySelector('#pequena');
let media = document.querySelector('#media');
let grande = document.querySelector('#grande');
let calcular = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');


function calcularTotal () {
    let pp = Number(pequena.value);
    let mm = Number(media.value);
    let gg = Number(grande.value);
    total = pp * 10 + mm * 12 + gg * 15;
    T = total.toFixed(2)

    resultado.innerHTML=(T + 'R$')
}

calcular.onclick = function () {
    calcularTotal();
}