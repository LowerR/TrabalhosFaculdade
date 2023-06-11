let pao = document.querySelector('#pao');
let broa = document.querySelector('#broa');
let calcular = document.querySelector('#calcular');
let resultado1 = document.querySelector('#resultado1');
let resultado2 = document.querySelector('#resultado2');

function calcularTotal () {
    let numPao = Number(pao.value);
    let numBroa = Number(broa.value);
    T = numPao * 0.12 + numBroa * 1.50;
    TT = T.toFixed(2)

    resultado1.innerHTML=(TT + 'R$');
    resultado2.innerHTML=(10 * TT / 100 + 'R$');
}

calcular.onclick = function () {
    calcularTotal();
}