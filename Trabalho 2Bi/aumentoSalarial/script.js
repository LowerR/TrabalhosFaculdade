let salario = document.querySelector('#salario');
let calculo = document.querySelector('#digitalizar');
let resultado = document.querySelector('#resultado');
let resultado1 = document.querySelector('#resultado1');
let resultado2 = document.querySelector('#resultado2');

function calcularSalario() {
    let rs = Number(salario.value);
    let aumento = rs * 0.15;
    let total = rs + aumento - 0.08;


    resultado.innerHTML=( 'Salario:' + ' ' + rs + 'R$');
    resultado1.innerHTML=('Aumento:' + ' ' + aumento + 'R$');
    resultado2.innerHTML=('Total:' + ' ' + total + 'R$');
}

calculo.onclick = function() {
    calcularSalario();
}