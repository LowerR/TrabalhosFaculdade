let kg = document.querySelector('#kg');
let calcular = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');


function calcularKg () {
    let quilos = Number(kg.value);
    total = quilos * 12 - 0.200 // preço já tirando o peso do prato
    let decimal = total.toFixed(2) // para decimal somente em 2 casas

    resultado.innerHTML=('Total a pagar' + ' ' + decimal + 'R$');
}

calcular.onclick = function () {
    calcularKg();
}