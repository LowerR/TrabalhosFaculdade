let valor = document.querySelector('#valor');
let litros = document.querySelector('#litros');
let calcular = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');

function calcularTotal () {
    let valorRS = Number(valor.value);
    let litrosL = Number(litros.value);
    total = valorRS / litrosL;

    resultado.innerHTML=('Você podera encher' + ' ' + total + ' ' + 'Litros!!' );

}

calcular.onclick = function () {
    calcularTotal();
}